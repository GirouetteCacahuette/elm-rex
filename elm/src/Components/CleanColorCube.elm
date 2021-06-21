module Components.CleanColorCube exposing (Model, Msg, init, update, view)

import Css exposing (..)
import Html.Styled exposing (Html, div)
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)


type Color
    = Red
    | Blue
    | Orange



---- Model ----


type alias Model =
    { color : Color }



---- Init ----


init : Model
init =
    { color = Red
    }



---- Update ----


type Msg
    = NoOp
    | ChangeColor


update : Model -> Msg -> ( Model, Cmd Msg )
update model msg =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ChangeColor ->
            ( { model
                | color =
                    case model.color of
                        Red ->
                            Blue

                        Blue ->
                            Orange

                        Orange ->
                            Red
              }
            , Cmd.none
            )



---- View ----


view : Model -> Html Msg
view model =
    div [ css containerStyles, onClick ChangeColor ]
        [ div [ css (colorCubeStyles model.color) ] []
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
