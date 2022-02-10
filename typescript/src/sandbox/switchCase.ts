export type VipCustomer = {
  type: "VIP";
  name: string;
  email: string;
  vipPoints: number;
};

type RegularCustomer = { type: "Regular"; name: string; email: string };

type Customer = VipCustomer | RegularCustomer;

// const getCustomerVipPoints = (customer: Customer): number => {
// };
