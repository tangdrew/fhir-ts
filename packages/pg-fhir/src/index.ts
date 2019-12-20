import {
  sql,
  createPool,
  DatabasePoolType,
  SqlTokenType,
  TaggedTemplateLiteralInvocationType,
  SlonikError
} from "slonik";
import { parse } from "./parser";
import { tryCatch } from "fp-ts/lib/TaskEither";

const main = async () => {
  const pool = createPool(
    "postgres://postgres:mysecretpassword@localhost:5432/postgres"
  );
  const db = new PostgresClient(pool);
  try {
    await db.createExtension(Extension.PgCrypto)();
    const table = await db.createTable({
      name: "patients",
      columns: [
        {
          name: "id",
          type: PostgresColumnType.Uuid,
          nullable: false,
          defaultStatement: sql`gen_random_uuid()`
        },
        {
          name: "data",
          type: PostgresColumnType.Jsonb,
          nullable: false
        }
      ],
      constraints: [
        { name: "id_primary_key_patients", statement: sql`PRIMARY KEY ( id )` }
      ]
    })();
    // await createExtensions({ pool });
    await createFunctions({ pool })();
    await createTriggers({ pool })();
    // await createResourceTable({ pool })("patients");
    await createResource({ pool })({
      id: "50bc8226-1fbc-11ea-978f-2e728ce88125",
      data: {
        resourceType: "Patient",
        id: "50bc8226-1fbc-11ea-978f-2e728ce88125"
      }
    });
    await parse("(name.given | name.family).substring(0,4)");
  } catch (err) {
    console.error(err);
  }
};

interface Context {
  pool: DatabasePoolType;
}

enum Extension {
  PgCrypto = "pgcrypto"
}

class PostgresClient {
  constructor(private pool: DatabasePoolType) {}

  public query = (statement: TaggedTemplateLiteralInvocationType) =>
    tryCatch(
      () => this.pool.query(statement),
      error => error as SlonikError
    );

  /**
   * Idempotently create a PostgreSQL extension
   */
  public createExtension = (extension: Extension) =>
    this.query(sql`CREATE EXTENSION IF NOT EXISTS ${extension};`);
  /**
   * Idempotently create a PostreSQL table
   */
  public createTable = ({
    name,
    columns,
    constraints
  }: {
    name: string;
    columns: ColumnDefinition[];
    constraints: ConstraintDefinition[];
  }) =>
    this.query(
      sql`CREATE TABLE IF NOT EXISTS ${sql.identifier([name])} (${sql.join(
        [
          ...columns.map(columnDefinition),
          ...constraints.map(constraintDefinition)
        ],
        sql`, `
      )})`
    );
}

const createExtensions = ({ pool }: Context) =>
  pool.query(sql`CREATE EXTENSION IF NOT EXISTS pgcrypto;`);

const createResourceTable = ({ pool }: Context) => async (
  resourceName: string
) => {
  const res = await pool.query(sql`
    CREATE TABLE IF NOT EXISTS ${sql.identifier([resourceName])} (
      id UUID NOT NULL DEFAULT gen_random_uuid(), 
      data jsonb NOT NULL,
      CONSTRAINT id_primary_key_patients PRIMARY KEY ( id )
    );
  `);
  console.log(res);
};

const createResource = ({ pool }: Context) => async ({
  id,
  data
}: {
  id: string;
  data: any;
}) =>
  pool.query(sql`INSERT INTO patients (data) VALUES (${JSON.stringify(data)})`);

const createFunctions = ({ pool }: Context) => async () => {
  const res = await pool.query(sql`
    CREATE OR REPLACE FUNCTION validate_fhir_id() returns trigger as $$
    DECLARE
    id_count int;
    BEGIN
    id_count := (SELECT COUNT(*) FROM patients WHERE patients.id = (NEW.data->>'id')::uuid);
    IF (id_count !=0) THEN
        RAISE EXCEPTION 'ID % is already taken', NEW.id;
    END IF;
    RETURN NEW;
    END;
    $$ language plpgsql;

    CREATE OR REPLACE FUNCTION fhirpath_substring(string text, begin_idx int, end_idx int) returns text as $$
    BEGIN
    RETURN substring(string from begin_idx for end_idx);
    END
    $$ language plpgsql;
  `);
  console.log(res);
};

const createTriggers = ({ pool }: Context) => async () => {
  await pool.query(
    sql`DROP TRIGGER IF EXISTS validate_fhir_id_trigger ON patients;`
  );
  await pool.query(
    sql`CREATE TRIGGER validate_fhir_id_trigger BEFORE INSERT OR UPDATE ON patients FOR EACH ROW EXECUTE PROCEDURE validate_fhir_id();`
  );
};

enum PostgresColumnType {
  String,
  Uuid,
  Jsonb
}

interface ColumnDefinition {
  name: string;
  type: PostgresColumnType;
  nullable: boolean;
  defaultStatement?: SqlTokenType;
}

interface ConstraintDefinition {
  name: string;
  statement: SqlTokenType;
}

const createTable = ({
  name,
  columns
}: {
  name: string;
  columns: ColumnDefinition[];
}) => sql`
  CREATE TABLE IF NOT EXISTS ${sql.identifier([name])} (
    ${sql.join(columns.map(columnDefinition), sql`, `)}
  )
`;

const typeToSql = (type: PostgresColumnType) => {
  switch (type) {
    case PostgresColumnType.String:
      return sql`string`;
    case PostgresColumnType.Uuid:
      return sql`UUID`;
    case PostgresColumnType.Jsonb:
      return sql`jsonb`;
  }
};

const columnDefinition = ({
  name,
  type,
  nullable,
  defaultStatement
}: ColumnDefinition) =>
  sql.join(
    [
      sql.identifier([name]),
      typeToSql(type),
      nullable ? sql`` : sql`NOT NULL`,
      defaultStatement ? sql`DEFAULT ${defaultStatement}` : sql``
    ],
    sql` `
  );

const constraintDefinition = ({ name, statement }: ConstraintDefinition) =>
  sql`CONSTRAINT ${sql.identifier([name])} ${statement}`;

main();
