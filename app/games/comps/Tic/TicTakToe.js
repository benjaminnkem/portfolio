import { useEffect, useRef, useState } from "react";
import TikBox from "./TicBox";

const TicTokToe = ({ curTurn, setCurTurn }) => {
  const [boxes, setBoxes] = useState([
    { id: 1, sign: "" },
    { id: 2, sign: "" },
    { id: 3, sign: "" },
    { id: 4, sign: "" },
    { id: 5, sign: "" },
    { id: 6, sign: "" },
    { id: 7, sign: "" },
    { id: 8, sign: "" },
    { id: 9, sign: "" },
  ]);
  const [someoneWon, setSomeoneWon] = useState(false);

  const squareRef = useRef(null);

  function changeTurns() {
    if (curTurn === "X") {
      setCurTurn("O");
    } else {
      setCurTurn("X");
    }
  }

  // Giving all boxes signs when clicked
  function updateBoxSign(index, sign) {
    let tempBoxData = boxes[index];
    tempBoxData = { id: boxes[index].id, sign };

    const tempHolder = [...boxes];
    tempHolder[index] = tempBoxData;

    setBoxes(tempHolder);

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 3, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    const allSquares = document.querySelectorAll(".square");
    winningCombos.forEach((arr) => {
      const circleWins = arr.every((cell) => allSquares[cell].firstChild?.classList.contains("circle"));
      if (circleWins) {
        setCurTurn("Circle wins");
        setSomeoneWon(true)
        console.log("circle wins");
        return;
      }
      
      const crossWins = arr.every((cell) => allSquares[cell].firstChild?.classList.contains("cross"));
      if (crossWins) {
        setCurTurn("Cross wins");
        setSomeoneWon(true)
        console.log("Cross wins");
        return;
      }
    });
  }

  return (
    <>
      <h3 className="font-bold text-xl text-center">Tic Tak Toe</h3>

      <div className="mt-4">
        <div
          className="grid grid-cols-3 w-[300px] mx-auto overflow-hidden border border-opacity-10 rounded-md"
          ref={squareRef}
        >
          {boxes.map((box, i) => (
            <TikBox
              key={i}
              index={i}
              boxes={boxes}
              curTurn={curTurn}
              squareRef={squareRef}
              changeTurns={changeTurns}
              updateBoxSign={updateBoxSign}
              someoneWon={someoneWon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTokToe;
