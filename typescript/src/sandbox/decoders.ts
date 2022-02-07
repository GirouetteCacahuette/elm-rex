import { JsonDecoder, Result } from "ts.data.json";

export type Ticket = { id: number; price: number };

type MemberStatus = "Gold" | "Platinum";

type UserInfo = {
  name: string;
  surname: string;
  age: number;
  tickets: Ticket[];
  memberStatus: MemberStatus;
};

const ticketDecoder: JsonDecoder.Decoder<Ticket> = JsonDecoder.object(
  {
    id: JsonDecoder.number,
    price: JsonDecoder.number,
  },
  "ticketDecoder"
);

const memberStatusDecoder: JsonDecoder.Decoder<MemberStatus> =
  JsonDecoder.string.chain((stringValue) => {
    switch (stringValue) {
      case "gold":
        return JsonDecoder.constant("Gold");

      case "plat":
        return JsonDecoder.constant("Platinum");

      default:
        return JsonDecoder.fail("Bad data");
    }
  });

const userInfoDecoder: JsonDecoder.Decoder<UserInfo> = JsonDecoder.object(
  {
    info: JsonDecoder.object(
      {
        name: JsonDecoder.string,
        surname: JsonDecoder.string,
        age: JsonDecoder.number,
      },
      "infoDecoder"
    ),
    tickets: JsonDecoder.array(ticketDecoder, "ticketsDecoder"),
    memberStatus: memberStatusDecoder,
  },
  "userInfoDecoder"
).map(({ info, memberStatus, tickets }) => {
  return {
    name: info.name,
    surname: info.surname,
    age: info.age,
    tickets,
    memberStatus,
  };
});

const usersInfoDecoder: JsonDecoder.Decoder<UserInfo[]> = JsonDecoder.array(
  userInfoDecoder,
  "usersInfoDecoder"
);

const dataFromApi = {
  users: [
    {
      info: {
        name: "Martin",
        surname: "Prieur",
        age: 58,
      },
      tickets: [
        { id: 456189, price: 1972 },
        { id: 324891, price: 4577 },
      ],
      memberStatus: "gold",
    },
    {
      info: {
        name: "Nitram",
        surname: "Rueirp",
        age: 85,
      },
      tickets: [
        { id: 981654, price: 2791 },
        { id: 198423, price: 7754 },
      ],
      memberStatus: "plat",
    },
  ],
};

const usersInfoDecodeResult: Result<UserInfo[]> =
  usersInfoDecoder.decode(dataFromApi);

const usersInfo: UserInfo[] = usersInfoDecodeResult.isOk()
  ? usersInfoDecodeResult.value
  : [];
