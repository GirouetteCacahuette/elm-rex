import React, { useMemo, useState } from "react";
import { clogNeverValue } from "../Helpers/helpers";


export type Color = "blue" | "red" | "orange";

type Props = {
  color: Color;
};

export const ColorCube = ({ color }: Props) => {
  const backgroundColor = useMemo(() => {
    switch (color) {
      case "blue":
        return "#1319d1";
      case "red":
        return "#f71b35";
      case "orange":
        return "#f09400";
      default:
        clogNeverValue(color);
        break;
    }
  }, [color]);

  let myNumber: number = 123;

  //ICI
  // let myAny: any = 123;

  // const myArray = myAny.map((something : any) => {
  //   return something + 1;
  // });

  // const getResult = (myNullOrString : string | null) => {
  //     const result = myNullOrString.split('s')
  // }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ height: 30, width: 30, backgroundColor: backgroundColor }}
      />
    </div>
  );
};
