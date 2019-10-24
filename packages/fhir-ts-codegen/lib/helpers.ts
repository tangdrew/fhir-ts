/**
 * Helpers module
 */

import { writeFile } from "fs";
import { promisify } from "util";

export const writeFileAsync = promisify(writeFile);

export const renameKey = (oldKey: string, newKey: string) => ({
  [oldKey]: old,
  ...others
}) => ({
  [newKey]: old,
  ...others
});

export const capitalize = (str: string) =>
  str.length > 0 ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";

export const stringsToPascalCase = (strs: string[]) =>
  strs.reduce((accum, curr) => `${accum}${capitalize(curr)}`, "");

export const stringsToCamelCase = (strs: string[]) =>
  strs.reduce(
    (accum, curr, index) =>
      index > 0
        ? `${accum}${capitalize(curr)}`
        : `${accum}${curr.toLowerCase()}`,
    ""
  );
