import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enterdPlayerName, setEnteredPlayerName] = useState(null);
  // const [isButtonClicked, setIsButtonClicked] = useState(false);

  // function handleChange(event) {
  //   setIsButtonClicked(false);
  //   setPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value="";
  }
  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"} </h2> 
      {/* true일때는 ?? 앞의 값을 null또는 undefined 일때는 ?? 뒤의 값을 가져온다 */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
