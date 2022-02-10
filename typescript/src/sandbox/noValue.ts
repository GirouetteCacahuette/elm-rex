export type Dog = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  surname: string;
  dog: Dog;
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

// export const getPersonsDogAge = (person: Person): number => {
//
// };
