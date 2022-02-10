export class JustClass<T> {
  value: T;
  readonly isJust: true = true;
  constructor(value: T) {
    this.value = value;
  }
  map<K>(fn: (value: T) => K): JustClass<K> {
    return new JustClass(fn(this.value));
  }
}

export class NothingClass {
  readonly isJust = false;
}

export type Maybe<T> = JustClass<T> | NothingClass;

export const Just = <T>(value: T) => new JustClass(value);
export const Nothing = new NothingClass();
