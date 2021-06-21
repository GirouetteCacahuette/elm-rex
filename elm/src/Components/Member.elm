module Components.Member exposing (Member(..), view)

import Html.Styled exposing (Html, div, p, text)


type Member
    = Anonymous
    | Premium Int
    | VIP Int String


view : Member -> Html msg
view member =
    let
        message =
            case member of
                Anonymous ->
                    "Welcome stranger !"

                Premium fidelityPoints ->
                    "Welcome Premium member ! You have " ++ String.fromInt fidelityPoints ++ " fidelity points"

                VIP fidelityPoints address ->
                    "Welcome VIP member ! You have "
                        ++ String.fromInt fidelityPoints
                        ++ " fidelity points, VIP gifts are send to you at "
                        ++ address
    in
    div []
        [ p [] [ text message ]
        ]
