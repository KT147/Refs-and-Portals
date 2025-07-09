import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSumbitted] = useState(false);

  // const handleChange = (event) => {
  //   setSumbitted(false);
  //   setEnteredPlayerName(event.target.value);
  // };

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  //  kas on tõene ?? või siis teine pool küsimärke kui pole!
  // <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
  // õige on || mitte ??

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
