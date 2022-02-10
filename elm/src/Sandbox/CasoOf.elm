module Sandbox.CasoOf exposing (Customer(..), RegularCustomerInfo, VipCustomerInfo)


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
    | VIP VipCustomerInfo Int
