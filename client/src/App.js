import { useState } from "react";
import "./App.css";
import MovementInput from "./Components/MovementInput";
import { postMoves } from "./services/apiClient";

function App() {
  const [result, setResult] = useState("");
  async function toMordor(e, moves) {
    if (!moves.length) {
      e.preventDefault();
      setResult(
        "Paralized by fear you dared not move your feet, and so the dark lord has found you"
      );
      return;
    }
    e.preventDefault();
    let res = await postMoves({ playerMoves: moves });
    console.log(res);
    setResult(res);
  }

  return (
    <div className="App">
      <div className="instructions">
        <h2>
          Frodo is at the black Gate, guide frodo to mount doom to destroy the
          ring and save Middle-Earth
        </h2>
        <p>
          Enter a comibination of directions and see what happened to frodo and
          the fate of the ring of power
        </p>
        <p>
          on the input field press s to go south, n to go north, e to go east
          and w to go west. then either press enter or click the button to see
          the result
        </p>
      </div>
      <MovementInput handleSubmit={toMordor} />
      <h1>{result}</h1>
    </div>
  );
}

export default App;
