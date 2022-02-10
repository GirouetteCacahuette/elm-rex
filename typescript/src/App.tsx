import React, { useState } from "react";
import "./App.css";
import { ColorCube } from "./Components/ColorCube";
import { MemberMessage } from "./Components/Member";

export const App = () => {
  const [colorCubeIsVisible, setColorCubeIsVisible] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <MemberMessage member={{ type: "Premium", fidelityPoints: 12 }} />
      <button
        style={{ marginTop: 20, marginBottom: 20, alignSelf: "center" }}
        onClick={() => {
          setColorCubeIsVisible(!colorCubeIsVisible);
        }}
      >
        Show color cube
      </button>
      {colorCubeIsVisible && <ColorCube color={"blue"} />}
    </div>
  );
};

export default App;
