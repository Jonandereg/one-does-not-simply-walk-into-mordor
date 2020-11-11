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
      <MovementInput handleSubmit={toMordor} />
      <h1>{result}</h1>
    </div>
  );
}

export default App;
