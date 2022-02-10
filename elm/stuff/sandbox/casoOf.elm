module Main exposing (Customer(..), RegularCustomerInfo, VipCustomerInfo, getCustomerVipPoints, myCustomer)


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


getCustomerVipPoints : Customer -> Int
getCustomerVipPoints customer =
    case customer of
        VIP customerInfo ->
            customerInfo.vipPoints

        Regular _ ->
            0


myCustomer : Customer
myCustomer =
    VIP { name = "Ismael", email = "poppinBuckets@vip.com", vipPoints = 500 }
