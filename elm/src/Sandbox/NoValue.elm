module Sandbox.NoValue exposing (Dog, Person, getPersonsDogAge, me)


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


getPersonsDogAge : Person -> Maybe Int
getPersonsDogAge person =
    case person.dog of
        Just dog ->
            Just dog.age

        Nothing ->
            Nothing


myDogAge : Maybe Int
myDogAge =
    getPersonsDogAge me


myFriendDogAge : Maybe Int
myFriendDogAge =
    getPersonsDogAge myFriend
