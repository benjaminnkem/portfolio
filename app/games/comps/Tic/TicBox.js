import { useRef, useState } from "react";

const TikBox = ({ changeTurns, curTurn, updateBoxSign, index }) => {
  const [numOfClick, setNumOfClick] = useState(0);
  const [showSign, setShowSign] = useState(false);
  const box = useRef(null);

  function handleAllClick() {
    setNumOfClick(numOfClick + 1);
    updateBoxSign(index, curTurn)
    if (numOfClick >= 1) return;

    if (curTurn === "X") {
      box.current.innerHTML = `<div>
      <i class="ri-close-line text-8xl font-extrabold" style="font-size: 6rem; line-height: 1;font-weight: 800;"></i>
      </div>`;
    } else {
      box.current.innerHTML = `<div class="w-[72px] h-[72px] rounded-full border-8" style="width: 72px; height: 72px; border-radius: 50%"></div>`;
    }
    changeTurns();
    setShowSign(true);
  }

  return (
    <>
      <div
        className="w-[100px] h-[100px] border border-opacity-10 grid place-content-center"
        onClick={handleAllClick}
        ref={box}
      ></div>
    </>
  );
};

export default TikBox;
