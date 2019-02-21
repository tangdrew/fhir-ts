/**
 * MoneyQuantity Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * An amount of money. With regard to precision, see [Decimal Precision](datatypes.html#precision)
 */
export interface MoneyQuantity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerical value (with implicit precision) */
  value?: t.TypeOf<primitives.R4.DecimalType>;
  /** < | <= | >= | > - how to understand the value */
  comparator?: t.TypeOf<primitives.R4.CodeType>;
  /** Unit representation */
  unit?: t.TypeOf<primitives.R4.StringType>;
  /** System that defines coded unit form */
  system?: t.TypeOf<primitives.R4.URIType>;
  /** Coded form of the unit */
  code?: t.TypeOf<primitives.R4.CodeType>;
}

export interface MoneyQuantityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Numerical value (with implicit precision) */
  value?: t.OutputOf<primitives.R4.DecimalType>;
  /** < | <= | >= | > - how to understand the value */
  comparator?: t.OutputOf<primitives.R4.CodeType>;
  /** Unit representation */
  unit?: t.OutputOf<primitives.R4.StringType>;
  /** System that defines coded unit form */
  system?: t.OutputOf<primitives.R4.URIType>;
  /** Coded form of the unit */
  code?: t.OutputOf<primitives.R4.CodeType>;
}

export const MoneyQuantity: t.RecursiveType<
  t.Type<MoneyQuantity, MoneyQuantityOutputType>,
  MoneyQuantity,
  MoneyQuantityOutputType
> = t.recursion<MoneyQuantity, MoneyQuantityOutputType>("MoneyQuantity", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Coded form of the unit */
        code: primitives.R4.code,
        /** < | <= | >= | > - how to understand the value */
        comparator: primitives.R4.code,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** System that defines coded unit form */
        system: primitives.R4.uri,
        /** Unit representation */
        unit: primitives.R4.string,
        /** Numerical value (with implicit precision) */
        value: primitives.R4.decimal
      })
    ],
    "MoneyQuantity"
  )
);
