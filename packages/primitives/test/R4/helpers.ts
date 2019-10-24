/**
 * Test helpers
 */

import { PathReporter } from "io-ts/lib/PathReporter";
import * as t from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { isLeft, isRight, getOrElse, map } from "fp-ts/lib/Either";

export const assertSuccess = <T>(validation: t.Validation<T>): void => {
  expect(isRight(validation)).toBe(true);
};

export const assertFailure = <T>(
  validation: t.Validation<T>,
  descriptions: Array<string>
): void => {
  expect(isLeft(validation));
  expect(PathReporter.report(validation)).toEqual(descriptions);
};

export const assertEqual = <T>(
  validation: t.Validation<T>,
  value: any
): void => {
  expect(
    pipe(
      validation,
      map(v => v === value),
      getOrElse(() => false)
    )
  );
};
