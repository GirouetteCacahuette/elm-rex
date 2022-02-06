const getPersonsDogAge = (person) => {
  const personName = person.name;
  const dogAge = person.dog.age;

  return dogAge.toString();
};

const friend = {
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

const myDogsAge = getPersonsDogAge(me);

const myFriendsDogAge = getPersonsDogAge(friend);
