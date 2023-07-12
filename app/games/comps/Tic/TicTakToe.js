import { useEffect, useState } from "react";
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
    tempBoxData = { id: boxes[index].id, sign }

    const tempHolder = [...boxes];
    tempHolder[index] = tempBoxData;

    setBoxes(tempHolder);
    console.log(boxes);
  }

  return (
    <>
      <h3 className="font-bold text-xl text-center">Tic Tak Toe</h3>

      <div className="mt-4">
        <div className="grid grid-cols-3 w-[300px] mx-auto overflow-hidden border border-opacity-10 rounded-md">
          {boxes.map((box, i) => (
            <TikBox key={i} changeTurns={changeTurns} curTurn={curTurn} updateBoxSign={updateBoxSign} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTokToe;
