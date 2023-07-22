"use client";
import { useState } from "react";

export const metadata = { title: "Check Messages" };

const MessageContent = () => {
  const [passkey] = useState(["benjaminnkemfrancis", "benjaminnkemjunior", "nkembenjamintochijunior"]);
  const [status, setStatus] = useState({ correct: false });
  const [passKeyInput, setPassKeyInput] = useState("");

  const validateKey = (e) => {
    const value = e.target.value;
    if (value.length <= 8) {
      setStatus({ ...status, correct: false });
      return;
    }

    passkey.forEach((key) => {
      if (value === key) {
        setStatus({ ...status, correct: true });
        return;
      }
    });
  };

  return (
    <>
      <div className="min-h-screen grid place-content-center">
        <div className="shadow-md rounded-md p-6 border border-orange-500 space-y-1 min-w-[md]">
          <input
            type="text"
            placeholder="Enter Passkey..."
            className="bg-transparent p-2 my-1 outline-none border-b border-orange-500 block"
            onChange={(e) => validateKey(e)}
          />
          <button
            className={`bg-orange-500 bg-opacity-10 p-1 text-center duration-200 rounded-md w-full disabled:bg-orange-800 ${
              status.correct && "hover:bg-orange-600 bg-opacity-10"
            }`}
            disabled={!status.correct}
          >
            {status.correct ? "Continue ✅" : "❌"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageContent;
