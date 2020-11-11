import { useState } from "react";

import "./MovementComponent.css";

function MovementComponent(props) {
  const [playerInput, setPlayerInput] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    if (
      e.nativeEvent.data === "n" ||
      e.nativeEvent.data === "s" ||
      e.nativeEvent.data === "e" ||
      e.nativeEvent.data === "w"
    ) {
      setPlayerInput([...playerInput, e.nativeEvent.data]);
    } else if (e.nativeEvent.data === null) {
      setPlayerInput(playerInput.slice(0, -1));
    } else {
      alert("invalid move");
    }
  };

  return (
    <div className="form_container">
      <form
        onSubmit={(e) => {
          props.handleSubmit(e, playerInput);
          setPlayerInput([]);
        }}
      >
        <input type="text" value={playerInput} onChange={handleChange}></input>
        <button
          className="form_button"
          onClick={(e) => {
            props.handleSubmit(e, playerInput);
            setPlayerInput([]);
          }}
        >
          Guide Frodo
        </button>
      </form>
    </div>
  );
}

export default MovementComponent;
