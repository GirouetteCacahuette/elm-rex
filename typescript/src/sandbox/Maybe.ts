import { JsonDecoder } from "ts.data.json";
import number = JsonDecoder.number;

export class JustClass<T> {
  value: T;
  readonly isJust: true = true;
  constructor(value: T) {
    this.value = value;
  }
}

export class NothingClass {
  readonly isJust = false;
}

export type Maybe<T> = JustClass<T> | NothingClass;

export const Just = <T>(value: T) => new JustClass(value);
export const Nothing = new NothingClass();

export const maybeMap = <T, K>(
  fn: (value: T) => K,
  maybe: Maybe<T>
): Maybe<K> => {
  return maybe.isJust ? Just(fn(maybe.value)) : Nothing;
};

export const withDefault = <T>(defaultValue: T, maybe: Maybe<T>): T => {
  return maybe.isJust ? maybe.value : defaultValue;
};

const maybeNumber = Just(123);

const maybeString: Maybe<string> = maybeMap(
  (num) => num.toString(),
  maybeNumber
);

const myString: string = withDefault("No value !", maybeString);
