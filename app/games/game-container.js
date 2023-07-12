"use client";
import TicTokToe from "./comps/Tic/TicTakToe";
import { useState } from "react";

const GameContainer = ({ games }) => {
  const [selectedGame, setSelectedGame] = useState("none");
  const [curTurn, setCurTurn] = useState(["X", "O"][Math.floor(Math.random() * ["X", "O"].length)]);
  const [info, setInfo] = useState(`${curTurn} Turn`);

  const handleSelection = (name) => {
    setSelectedGame(name);
  };

  return (
    <>
      <div className="md:grid gap-4" style={{ gridTemplateColumns: "2fr 5fr" }}>
        <div className="p-4">
          <h2 className="font-bold text-2xl text-center">Available Games</h2>
          <ul className="space-y-1 mt-4">
            {games.map((game, i) => (
              <li key={i} onClick={() => handleSelection(game.name)}>
                <div
                  className={`p-1 text-center bg-white bg-opacity-10 duration-200 cursor-pointer hover:bg-opacity-20 rounded-md ${
                    selectedGame === game.name && "bg-opacity-20"
                  }`}
                >
                  <p>{game.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h2 className="font-bold md:text-2xl text-xl text-center">Preview (Under Construction)</h2>

          <div className="mt-4">
            {selectedGame === "Tic Tak Toe" && (
              <>
                <p className="opacity-40 text-sm text-center mt-4">{info}</p>
                <div>
                  <TicTokToe curTurn={curTurn} setCurTurn={setCurTurn} setInfo={setInfo} />
                </div>
              </>
            )}
            {selectedGame === "Memorium" && (
              <>
               <div>
                <p className="opacity-50 text-center">Under Construction 🚧👷‍♂️</p>
               </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameContainer;
