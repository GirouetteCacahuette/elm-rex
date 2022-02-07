import { Maybe, Nothing, Some } from "../sandbox/Maybe";

export const getArrayValue = <T>(array: T[], index: number): Maybe<T> => {
  return !!array[index] ? Some(array[index]) : Nothing;
};

const findInArray = <T>(
  array: T[],
  predicate: (item: T) => boolean
): Maybe<T> => {
  const foundItem = array.find(predicate);
  return foundItem ? Some(foundItem) : Nothing;
};

const testArray = [1, 2, 3];

const arrayValue3: number = testArray[3];
const arrayValue3String = arrayValue3.toString();

const maybeArrayValue3: Maybe<number> = getArrayValue(testArray, 3);
const arrayValue3String_ = maybeArrayValue3.isSome
  ? maybeArrayValue3.value.toString()
  : "";

const find4InArray = testArray.find((num) => num === 4);
//const find4InArrayString = find4InArray.toString();

type NonEmptyArray<T> = [T, ...T[]];

const nonEmptyArrayTest: NonEmptyArray<number> = [1, 2, 3];
// const emptyNonEmptyArray : NonEmptyArray<number> = []
