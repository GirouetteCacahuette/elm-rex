module Main exposing (..)

import Browser
import Components.CleanColorCube as CleanColorCube
import Components.ColorCube as ColorCube exposing (Color(..))
import Components.Member as Member exposing (Member)
import Html exposing (Html, div)
import Html.Styled exposing (toUnstyled)
import Sandbox.CasoOf
import Sandbox.CustomType
import Sandbox.Decoders
import Sandbox.NoValue



---- MODEL ----


type alias Model =
    { colorCubeModel : CleanColorCube.Model
    }


init : ( Model, Cmd Msg )
init =
    ( { colorCubeModel = CleanColorCube.init
      }
    , Cmd.none
    )



---- UPDATE ----


type Msg
    = NoOp
    | ColorCubeMsg CleanColorCube.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ColorCubeMsg colorCubeMsg ->
            let
                ( newColorCubeModel, cmd ) =
                    CleanColorCube.update model.colorCubeModel colorCubeMsg
            in
            ( { colorCubeModel = newColorCubeModel }
            , cmd |> Cmd.map ColorCubeMsg
            )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ ColorCube.view ColorCube.Blue
            |> toUnstyled
        , Member.view (Member.Premium 45)
            |> toUnstyled
        , CleanColorCube.view model.colorCubeModel
            |> toUnstyled
            |> Html.map ColorCubeMsg
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
