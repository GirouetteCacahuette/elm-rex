export const clogNeverValue = (neverValue: never) => {
  console.log("Impossible value: ", neverValue);
};

// type Color = "Red" | "Green" | "Blue";
//
// type Shape = { type: "Circle" } | { type: "Square"; color: Color };
//
// const isShapeValid = (shape: Shape): boolean => {
//   switch (shape.type) {
//     case "Circle":
//       return true;
//
//     case "Square":
//       switch (shape.color) {
//         case "Green":
//           return true;
//         case "Blue":
//           return true;
//         case "Red":
//           return false;
//       }
//   }
// };

enum Color {
  Red,
  Green,
  Blue,
}

type Shape = { type: "Circle" } | { type: "Square"; color: Color };

const isColorBeautiful = (color: Color): boolean => {
  switch (color) {
    case Color.Blue:
      return true;
    case Color.Green:
      return false;
    case Color.Red:
      return true;
  }
};
