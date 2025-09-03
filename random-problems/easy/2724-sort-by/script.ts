// 2724-sort-by — script.ts
// created: 2025-09-03 21:33

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
  return sortedArr;
}
