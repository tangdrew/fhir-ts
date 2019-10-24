/**
 * Decimal FHIR Primitive Runtime Type
 */

// import { Big } from "big.js";
import { Type, success, failure, TypeOf, identity } from "io-ts";

// /**
//  * Class that wraps big.js to maintain precision, including trailing zeros
//  */
// export class Decimal extends Big {
//   private dp: number;
//   constructor(n: string | number) {
//     super(n);
//     this.dp = this.decimalPlaces(n);
//   }

//   public toFixed() {
//     return super.toFixed(this.dp);
//   }

//   private decimalPlaces(n: string | number) {
//     // Coerce to string
//     const number = String(n);
//     const hasDecimal = number.includes(".");
//     const exponentialForm = number.includes("e");
//     if (hasDecimal) {
//       if (exponentialForm) {
//         const [mantissa, exponent] = number.split(".")[1].split("e");
//         return mantissa.length - parseInt(exponent);
//       } else {
//         return number.split(".")[1].length;
//       }
//     } else {
//       return 0;
//     }
//   }
// }

// const isDecimal = (m: unknown): m is Decimal => m instanceof Decimal;

// /**
//  * Rational numbers that have a decimal representation.
//  */
// export const decimal = new Type<Decimal, string>(
//   "decimal",
//   isDecimal,
//   (m, c) => {
//     try {
//       const decimal = new Decimal(<any>m);
//       return success(decimal);
//     } catch (e) {
//       return failure(m, c);
//     }
//   },
//   a => a.toFixed()
// );

// export type decimal = TypeOf<typeof decimal>;

const isDecimal = (m: unknown): m is number => typeof m === "number";

/**
 * Rational numbers that have a decimal representation.
 * TODO: Implement precision persistence
 */
export const decimal = new Type<number>(
  "decimal",
  isDecimal,
  (m, c) => (isDecimal(m) ? success(m) : failure(m, c)),
  identity
);

export type decimal = TypeOf<typeof decimal>;
