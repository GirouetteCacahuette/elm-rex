module Main exposing (Dog, Person, getPersonsDogAge, me, myDogAge, myFriend, myFriendDogAge)


type alias Dog =
    { name : String
    , age : Int
    }


type alias Person =
    { name : String
    , surname : String
    , dog : Maybe Dog
    }


me : Person
me =
    { name = "Martin"
    , surname = "Prieur"
    , dog = Nothing
    }


myFriend : Person
myFriend =
    { name = "Fabien"
    , surname = "Pollet"
    , dog = Just { name = "Popi", age = 6 }
    }


getPersonsDogAge : Person -> Maybe String
getPersonsDogAge person =
    let
        dogAge =
            person.dog |> Maybe.map .age
    in
    Maybe.map
        String.fromInt
        dogAge


myDogAge : Maybe String
myDogAge =
    getPersonsDogAge me


myFriendDogAge : Maybe String
myFriendDogAge =
    getPersonsDogAge myFriend
