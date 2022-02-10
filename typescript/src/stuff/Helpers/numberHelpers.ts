import { Maybe, Nothing, Just } from "../sandbox/Maybe";

export const parseFloatMaybe = (stringValue: string): Maybe<number> => {
  const parsedFloat = parseFloat(stringValue.replace(",", "."));
  return isNaN(parsedFloat) ? Nothing : Just(parsedFloat);
};

export const parseIntMaybe = (stringValue: string): Maybe<number> => {
  const parsedInt = parseInt(stringValue);
  return isNaN(parsedInt) ? Nothing : Just(parsedInt);
};

const randomString = "Not a number at all !";
const intFromString: number = parseInt(randomString);
const floatFromString: number = parseFloat(randomString);
const formattedNumber = `Voici votre nombre : ${intFromString.toFixed(2)}`;

const maybeIntFromString: Maybe<number> = parseIntMaybe(randomString);
const formattedNumber_ = maybeIntFromString.isJust
  ? `Voici votre nombre : ${maybeIntFromString.value}`
  : `${randomString} n'est pas un nombre !`;
