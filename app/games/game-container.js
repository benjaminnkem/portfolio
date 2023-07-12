"use client";
import TicTokToe from "./comps/Tic/TicTakToe";
import { useState } from "react";

const GameContainer = ({ games }) => {
  const [selectedGame, setSelectedGame] = useState("none");
  const [curTurn, setCurTurn] = useState(["X", "O"][Math.floor(Math.random() * ["X", "O"].length)]);
  const [info, setInfo] = useState(`${curTurn} Turn`)

  const handleSelection = (name) => {
    setSelectedGame(name);
  };

  return (
    <>
      <div className="grid gap-4" style={{ gridTemplateColumns: "2fr 5fr" }}>
        <div className="p-4">
          <h2 className="font-bold text-2xl text-center">Available</h2>
          <ul className="space-y-1 mt-4">
            {games.map((game, i) => (
              <li key={i} onClick={() => handleSelection(game.name)}>
                <div className="p-1 text-center bg-white bg-opacity-10 duration-200 cursor-pointer hover:bg-opacity-20 rounded-md">
                  <p>{game.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h2 className="font-bold text-2xl text-center">Demo</h2>

          <div className="mt-4">
            {selectedGame === "Tic Tak Toe" && (
              <div>
                <TicTokToe curTurn={curTurn} setCurTurn={setCurTurn} setInfo={setInfo}/>
                <p className="opacity-40 text-sm text-center mt-4">{info}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ri-close-line text-8xl font-extrabold w-[72px] h-[72px] rounded-full border-8 fixed -top-96 -right-96"></div>
    </>
  );
};

export default GameContainer;
