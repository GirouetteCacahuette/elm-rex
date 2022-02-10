export class JustClass<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export class NothingClass {}

export type Maybe<T> = JustClass<T> | NothingClass;
