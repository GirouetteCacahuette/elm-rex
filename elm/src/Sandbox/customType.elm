module Main exposing (Color(..), colorToString)


type Color
    = Green
    | Red
    | Blue


colorToString : Color -> String
colorToString color =
    if color == Blue then
        "blue"

    else if color == Green then
        "green"

    else
        "red"


type alias RegularCustomerInfo =
    { name : String
    , email : String
    }


type alias VipCustomerInfo =
    { name : String
    , email : String
    , vipPoints : Int
    }


type Customer
    = Regular RegularCustomerInfo
    | VIP VipCustomerInfo
