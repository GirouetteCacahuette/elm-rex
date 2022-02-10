import React from "react";

export type Member =
  | { type: "Anonymous" }
  | { type: "Premium"; fidelityPoints: number }
  | { type: "VIP"; fidelityPoints: number; address: string };

type Props = {
  member: Member;
};

export const MemberMessage = ({ member }: Props) => {
  const memberToString = (member: Member): string => {
    switch (member.type) {
      case "Anonymous":
        return "Welcome stranger !";
      case "Premium":
        return `Welcome Premium member ! You have ${member.fidelityPoints} fidelity points`;
      case "VIP":
        return `Welcome VIP member ! You have ${member.fidelityPoints} fidelity points, VIP gifts are send to you at ${member.address}`;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <text>{memberToString(member)}</text>
    </div>
  );
};
