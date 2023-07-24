"use client";
import DateFormatter from "@/components/DateFormatter";
import { useState } from "react";

const MessageContent = () => {
  const [passkey] = useState(["benjaminnkemfrancis", "benjaminnkemjunior", "nkembenjamintochijunior"]);
  const [status, setStatus] = useState({ correct: false, loading: false });
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);

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

  const fetchMessages = async () => {
    setStatus({ ...status, loading: true });
    if (!status.correct) return;

    const res = await fetch("/api/message");
    if (!res.ok) {
      setStatus({ ...status, loading: false });
      return;
    }

    const data = await res.json();
    setStatus({ ...status, loading: false });
    setMessages(data);
    setShowMessages(true);
  };

  return (
    <>
      <div className="my-20 grid place-content-center">
        {!showMessages && (
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
              onClick={() => fetchMessages()}
              disabled={!status.correct}
            >
              {status.correct && !status.loading && "Continue ✅"}
              {status.loading && status.correct && "Loading Messages..."}
            </button>
          </div>
        )}

        {status.correct && showMessages && (
          <>
            <div className="p-2 rounded-md border-2 border-orange-500 max-h-[40rem] bg-black overflow-x-hidden min-w-[24rem] max-w-3xl mx-2">
              <h1 className="text-3xl text-center py-2">Your messages</h1>
              {messages.length > 0 ? (
                <div className="space-y-1">
                  {messages.map((message) => (
                    <div key={message.id} className="p-2 rounded-md duration-200 even:bg-orange-400 even:bg-opacity-10">
                      <h2 className="font-bold text-lg">
                        {message.name} <span className="text-sm font-light">{message.email}</span>
                      </h2>
                      <div>
                        <p className="mt-1 font-semibold">
                          Content: <span className="font-light">{message.content}</span>
                        </p>
                        <p className="font-bold text-sm mt-1">
                          {<DateFormatter dateAsString={message.date.split(", ")[0]} />} {message.date.split(", ")[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p>No available messages</p>
                </div>
              )}
            </div>

            <button onClick={fetchMessages} className="mt-2" title="Refresh Messages" disabled={status.loading}>
              { !status.loading ? <i className="ri-refresh-line text-xl text-orange-500"></i> : "Fetching..." }
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MessageContent;
