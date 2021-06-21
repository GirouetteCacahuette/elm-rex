import "./App.css";
import { ColorCube } from "./Components/ColorCube";
import { MemberMessage } from "./Components/Member";

function App() {
  return (
    <div>
      <ColorCube color={"blue"} />
      <MemberMessage member={{ type: "Premium", fidelityPoints: 12 }} />
    </div>
  );
}

export default App;
