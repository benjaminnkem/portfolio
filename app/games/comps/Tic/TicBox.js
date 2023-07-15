import { useEffect, useRef, useState } from "react";

const TikBox = ({ changeTurns, curTurn, updateBoxSign, setInfo, index, someoneWon, boxFilled, setBoxFilled }) => {
  const [numOfClick, setNumOfClick] = useState(0);
  const box = useRef(null);

  function handleAllClick() {
    setNumOfClick(numOfClick + 1);
    updateBoxSign(index, curTurn);
    if (numOfClick >= 1) return;

    if (curTurn === "X") {
      if (boxFilled === 8 && !someoneWon) {
        setInfo("Draw");
        box.current.innerHTML = `<div class="cross">
        <i class="ri-close-line text-8xl font-extrabold" style="font-size: 6rem; line-height: 1;font-weight: 800;"></i>
        </div>`;
      }
      else {
        setInfo("O turn");
        setBoxFilled(boxFilled + 1);
        box.current.innerHTML = `<div class="cross">
        <i class="ri-close-line text-8xl font-extrabold" style="font-size: 6rem; line-height: 1;font-weight: 800;"></i>
        </div>`;
      }
    } else {
      if (boxFilled === 8 && !someoneWon) {
        setInfo("Draw");
        box.current.innerHTML = `<div class="w-[72px] h-[72px] rounded-full border-8 circle" style="width: 72px; height: 72px; border-radius: 50%"></div>`;
      }
      else {
        setInfo("X turn");
        setBoxFilled(boxFilled + 1);
        box.current.innerHTML = `<div class="w-[72px] h-[72px] rounded-full border-8 circle" style="width: 72px; height: 72px; border-radius: 50%"></div>`;
      }
    }
    changeTurns();
  }

  return (
    <>
      <div
        className="w-[100px] h-[100px] border border-opacity-10 grid place-content-center square"
        onClick={someoneWon ? () => {} : handleAllClick}
        ref={box}
      ></div>
    </>
  );
};

export default TikBox;
