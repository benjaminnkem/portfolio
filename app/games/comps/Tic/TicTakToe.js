import { useEffect } from "react";
import TikBox from "./TicBox";

const boxes = ["", "", "", "", "", "", "", "", ""];

const TicTokToe = ({ curTurn, setCurTurn }) => {
  function changeTurns() {
    if (curTurn === "X") {
      setCurTurn("O");
    } else {
      setCurTurn("X");
    }
  }

  return (
    <>
      <h3 className="font-bold text-xl text-center">Tic Tak Toe</h3>

      <div className="mt-4">
        <div className="grid grid-cols-3 w-[300px] mx-auto overflow-hidden border border-opacity-10 rounded-md">
          {boxes.map((box, i) => (
            <TikBox key={i} changeTurns={changeTurns} curTurn={curTurn} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTokToe;
