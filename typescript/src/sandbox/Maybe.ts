interface SomeInterface<T> {
  value: T;
  readonly isSome: true;
  map<K>(fn: (value: T) => K): SomeInterface<K>;
}

export class SomeClass<T> implements SomeInterface<T> {
  value: T;
  readonly isSome: true = true;
  constructor(value: T) {
    this.value = value;
  }
  map<K>(fn: (value: T) => K): SomeInterface<K> {
    return new SomeClass(fn(this.value));
  }
}

export class NothingClass {
  readonly isSome = false;
}

export type Maybe<T> = SomeClass<T> | NothingClass;

export const Some = <T>(value: T) => new SomeClass(value);
export const Nothing = new NothingClass();
