/**
 * Decimal FHIR Primitive Runtime Type
 */

import { Big } from "big.js";
import { Type, success, failure } from "io-ts";

/**
 * Class that wraps big.js to maintain precision, including trailing zeros
 */
export class Decimal extends Big {
  private dp: number;
  constructor(n) {
    super(n);
    this.dp = this.decimalPlaces(n);
  }

  public toFixed(dp?: number) {
    return super.toFixed(this.dp);
  }

  private decimalPlaces(n: string | number) {
    // Coerce to string
    const number = String(n);
    const hasDecimal = number.includes(".");
    const exponentialForm = number.includes("e");
    if (hasDecimal) {
      if (exponentialForm) {
        const [mantissa, exponent] = number.split(".")[1].split("e");
        return mantissa.length - parseInt(exponent);
      } else {
        return number.split(".")[1].length;
      }
    } else {
      return 0;
    }
  }
}

export class DecimalType extends Type<Decimal, string, unknown> {
  readonly _tag: "DecimalType" = "DecimalType";
  constructor() {
    super(
      "decimal",
      (m): m is Decimal => m instanceof Decimal,
      (m, c) => {
        try {
          const decimal = new Decimal(<any>m);
          return success(decimal);
        } catch (e) {
          return failure(m, c);
        }
      },
      a => a.toFixed()
    );
  }
}

export const decimal = new DecimalType();
