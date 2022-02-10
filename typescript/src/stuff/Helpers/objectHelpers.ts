import { Maybe, Nothing, Just } from "../sandbox/Maybe";

export const getObjectValue = <U>(
  obj: Record<string | number, U>,
  key: string | number
): Maybe<U> => {
  const valueExists = obj[key];

  if (valueExists) {
    return Just(valueExists);
  } else {
    return Nothing;
  }
};

let myDictionary: Record<string, string> = {};

const myDictionaryValue = myDictionary["myKey"];
const myTrimmedValue = myDictionaryValue.trim();

const maybeMyDictionaryValue = getObjectValue(myDictionary, "myValue");
const myTrimedValue_ = maybeMyDictionaryValue.isJust
  ? maybeMyDictionaryValue.value.trim()
  : "";
