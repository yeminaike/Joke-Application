import React from "react";
import { useState } from "react";

function Joke(props) {
  const [isShown, setIsShown] = useState(true);

  function toggleShown() {
    // console.log(isShown)
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}

      <button onClick={toggleShown}>{isShown ? "Hide": "Show"}</button>

      <hr />
    </div>
  );
}

export default Joke;
