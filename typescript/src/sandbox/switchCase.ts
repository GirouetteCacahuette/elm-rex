export type VipCustomer = {
  type: "VIP";
  name: string;
  email: string;
  vipPoints: number;
};

type RegularCustomer = { type: "Regular"; name: string; email: string };

type Customer = VipCustomer | RegularCustomer;

const getCustomerVipPoints = (customer: Customer): number => {
  if (customer.type === "VIP") {
    console.log("VIP POINTS : ", customer.vipPoints);
  }

  if (isCustomerVip(customer)) {
    console.log("VIP POINTS : ", customer.vipPoints);
  }

  const name = customer.name;

  switch (customer.type) {
    case "Regular":
      return 0;

    case "VIP":
      return customer.vipPoints;
  }
};

const isCustomerVip = (customer: Customer): customer is VipCustomer => {
  return customer.type === "VIP";
};

const myCustomer: Customer = {
  type: "VIP",
  name: "Ismael",
  email: "poppinBuckets@vip.com",
  vipPoints: 500,
};

const myCustomerVipPoints = myCustomer.vipPoints;
