import { Maybe, Nothing, Just } from "./Maybe";

type Dog = {
  name: string;
  age: number;
};

type NonEmptyArray<T> = T[] & { 0: T };

const myArray: NonEmptyArray<number> = [3];

const myArrayLength = (array: number[]): number => {
  return array[6];
};

type Person = {
  name: string;
  surname: string;
  dog?: Dog;
};

const myFriend = {
  name: "Fabien",
  surname: "Pollet",
  dog: {
    name: "Popi",
    age: 6,
  },
};

const me = {
  name: "Martin",
  surname: "Prieur",
};

// export const getPersonsDogAge = (person: Person) : number => {
//   const dogAge = person.dog?.age;

//   return dogAge?.toString()
// }

export const getPersonsDogAge_ = (person: Person): Maybe<string> => {
  const dogAge = person.dog?.age;

  return !!dogAge ? Just(dogAge.toString()) : Nothing;
};

//const myDogsAge = getPersonsDogAge(me);

//const myFriendsDogAge = getPersonsDogAge(myFriend);
