import { nanoid } from "nanoid";
import Button from "./components/Button";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [gameStatus, SetgameStatus] = useState("start");
  const [diceNumbers, SetDiceNumbers] = useState([]);

  function handleStart() {
    SetgameStatus(() => "started");
  }
  function checkRoll() {
    const allEqual = (arr) => arr.every((val) => val === arr[0]);
    let checkArr = diceNumbers.map((item) => {
      return item.number;
    });
    const result = allEqual(checkArr);
    if (result) {
      SetgameStatus("WON");
    }
  }
  function handleRoll() {
    SetDiceNumbers((prevState) => {
      const newState = [...prevState];
      const retState = newState.map((item) => {
        if (item.freezed === false) {
          let num = Math.floor(Math.random() * 6) + 1;
          return { ...item, number: num };
        } else {
          return item;
        }
      });

      return retState;
    });
  }

  function handleDiceClick(event) {
    checkRoll();
    SetDiceNumbers((prevState) => {
      const newState = [...prevState];
      const retState = newState.map((item) => {
        if (item.id === event.target.id) {
          return { ...item, freezed: !item.freezed };
        } else {
          return item;
        }
      });

      return retState;
    });
  }

  useEffect(() => {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 6) + 1;
      diceArr.push({
        id: nanoid(),
        number: num,
        freezed: false,
      });
    }
    SetDiceNumbers(diceArr);
  }, [gameStatus]);
  const mapItem = diceNumbers.map((item) => {
    return <Item key={item.id} obj={item} clickFunc={handleDiceClick} />;
  });

  return (
    <div className="wrapper">
      <div className="main">
        <p> {gameStatus}</p>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click<br></br> each dice to freeze
          it at it's current value<br></br> between rolls.
        </p>
        <div className="dice-grid">{gameStatus === "started" && mapItem}</div>
        {gameStatus === "start" && 
          <Button func={handleStart} text="Start Game" />
        }
        {gameStatus === "started" && (
          <Button func={handleRoll} text="Roll Dice" />
        )}
      </div>
    </div>
  );
}

export default App;
