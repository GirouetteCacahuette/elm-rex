module Components.ColorCube exposing (Color(..), view)

import Css exposing (..)
import Html.Styled exposing (Html, div)
import Html.Styled.Attributes exposing (css)


type Color
    = Red
    | Blue
    | Orange


view : Color -> Html msg
view color =
    div [ css containerStyles ]
        [ div [ css (colorCubeStyles color) ] []
        ]


colorCubeStyles : Color -> List Style
colorCubeStyles color =
    [ backgroundColor
        (case color of
            Red ->
                hex "#f71b35"

            Blue ->
                hex "#1319d1"

            Orange ->
                hex "#f09400"
        )
    , width (px 30)
    , height (px 30)
    ]


containerStyles : List Style
containerStyles =
    [ displayFlex
    , justifyContent center
    ]
