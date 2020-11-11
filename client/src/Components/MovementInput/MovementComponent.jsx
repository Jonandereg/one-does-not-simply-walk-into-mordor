import { useState } from "react";

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
    } else {
      alert("invalid move");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.handleSubmit(e, playerInput);
          setPlayerInput([]);
        }}
      >
        <input type="text" value={playerInput} onChange={handleChange}></input>
        <button onClick={(e) => props.handleSubmit(e, playerInput)}>
          Guide Frodo
        </button>
      </form>
    </div>
  );
}

export default MovementComponent;
