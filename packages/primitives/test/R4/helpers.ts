/**
 * Test helpers
 */

import { PathReporter } from "io-ts/lib/PathReporter";
import * as t from "io-ts";

export const assertSuccess = <T>(validation: t.Validation<T>): void => {
  expect(validation.isRight()).toBe(true);
};

export const assertFailure = <T>(
  validation: t.Validation<T>,
  descriptions: Array<string>
): void => {
  expect(validation.isLeft());
  expect(PathReporter.report(validation)).toEqual(descriptions);
};

export const assertStrictEqual = <T>(
  validation: t.Validation<T>,
  value: any
): void => {
  expect(validation.fold<any>(t.identity, t.identity)).toBe(value);
};

export const assertDeepEqual = <T>(
  validation: t.Validation<T>,
  value: any
): void => {
  expect(validation.fold<any>(t.identity, t.identity)).toEqual(value);
};
