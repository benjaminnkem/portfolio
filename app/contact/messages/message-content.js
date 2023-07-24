"use client";
import DateFormatter from "@/components/DateFormatter";
import { useState } from "react";

const MessageContent = () => {
  const [passkey] = useState(["benjaminnkemfrancis", "benjaminnkemjunior", "nkembenjamintochijunior"]);
  const [status, setStatus] = useState({ correct: false, loading: false });
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);

  const [messageTip, setMessageTip] = useState(0);

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

    // Get previous message count
    const localMsgCount = localStorage.getItem("messageCount");

    // if previous message count is greater, update
    if (!localMsgCount) {
      localStorage.setItem("messageCount", data.length);
    } else {
      if (localMsgCount < data.length) {
        setMessageTip(`${data.length - localMsgCount} message(s) came in since last visit 😉`);
      } else if (localMsgCount > data.length) {
        setMessageTip(`${localMsgCount - data.length} message(s) was deleted since last visit 😮`);
      } else {
        setMessageTip("No new message since last visit😥");
      }

      localStorage.setItem("messageCount", data.length);
    }

    setStatus({ ...status, loading: false });
    setMessages(data);
    setShowMessages(true);
  };

  return (
    <>
      <div className="my-28 grid place-content-center">
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
            <div className="p-2 rounded-md border-2 border-orange-500 bg-black overflow-x-hidden min-w-[24rem] max-w-3xl mx-2">
              {messages.length > 0 ? (
                <>
                  <div className="text-center py-2">
                    <h1 className="text-3xl ">Your messages ({messages.length})</h1>
                    {messageTip && <p className="text-sm">Tip: {messageTip}</p>}
                  </div>
                  <div className="space-y-2">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className="p-3 rounded-md duration-200 even:bg-orange-400 even:bg-opacity-10"
                      >
                        <h2 className="font-bold text-lg">
                          {message.name} <span className="text-sm font-light">{message.email}</span>
                        </h2>
                        <div className="text-gray-300">
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
                </>
              ) : (
                <div>
                  <p>No available messages</p>
                </div>
              )}
            </div>

            <button onClick={fetchMessages} className="my-2 py-2" title="Refresh Messages" disabled={status.loading}>
              {!status.loading ? <i className="ri-refresh-line text-3xl text-orange-500"></i> : "Fetching..."}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MessageContent;
