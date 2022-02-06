export type Color = "Green" | "Red" | "Blue";

const colorToString = (color: Color): string => {
  if (color === "Green") {
    return "green";
  } else if (color === "Red") {
    return "red";
  } else {
    return "blue";
  }
};

type VipCustomer = {
  type: "VIP";
  name: string;
  email: string;
  vipPoints: number;
};

type RegularCustomer = { type: "Regular"; name: string; email: string };

type Customer = VipCustomer | RegularCustomer;
