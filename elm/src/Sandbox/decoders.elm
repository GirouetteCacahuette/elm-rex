module Main exposing (..)

import Json.Decode exposing (Decoder, field)
import Json.Decode.Pipeline exposing (required)


type alias Ticket =
    { id : Int
    , price : Float
    }


type MemberStatus
    = Gold
    | Platinum


type alias UserInfo =
    { name : String
    , surname : String
    , age : Int
    , tickets : List Ticket
    , memberStatus : MemberStatus
    }



--{
--  users: [
--    {
--      info: {
--        name: "Martin",
--        surname: "Prieur",
--        age: 58,
--      },
--      tickets: [
--        { id: 456189, price: 1972 },
--        { id: 324891, price: 4577 },
--      ],
--      memberStatus: "gold",
--    },
--    {
--      info: {
--        name: "Nitram",
--        surname: "Rueirp",
--        age: 85,
--      },
--      tickets: [
--        { id: 981654, price: 2791 },
--        { id: 198423, price: 7754 },
--      ],
--      memberStatus: "plat",
--    },
--  ],
--}


ticketDecoder : Decoder Ticket
ticketDecoder =
    Json.Decode.succeed Ticket
        |> required "id" Json.Decode.int
        |> required "price" Json.Decode.float


memberStatusDecoder : Decoder MemberStatus
memberStatusDecoder =
    let
        get id =
            case id of
                "gold" ->
                    Json.Decode.succeed Gold

                "plat" ->
                    Json.Decode.succeed Platinum

                _ ->
                    Json.Decode.fail ("unknown value for MemberStatus: " ++ id)
    in
    Json.Decode.string |> Json.Decode.andThen get


userInfoDecoder : Decoder UserInfo
userInfoDecoder =
    Json.Decode.succeed UserInfo
        |> required "info" (Json.Decode.at [ "name" ] Json.Decode.string)
        |> required "info" (Json.Decode.at [ "surname" ] Json.Decode.string)
        |> required "info" (Json.Decode.at [ "age" ] Json.Decode.int)
        |> required "tickets" (Json.Decode.list ticketDecoder)
        |> required "memberStatus" memberStatusDecoder


usersInfoDecoder : Decoder (List UserInfo)
usersInfoDecoder =
    Json.Decode.list userInfoDecoder
