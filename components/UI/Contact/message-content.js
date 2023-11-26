"use client";
import DateFormatter from "@/lib/utils/helper/date-formatter";
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
      <div className="grid my-28 place-content-center">
        {!showMessages && (
          <div className="shadow-md rounded-md p-6 border border-orange-500 space-y-1 min-w-[md]">
            <input
              type="text"
              placeholder="Enter Passkey..."
              className="block p-2 my-1 bg-transparent border-b border-orange-500 outline-none"
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
                  <div className="py-2 text-center">
                    <h1 className="text-3xl ">Your messages ({messages.length})</h1>
                    {messageTip && <p className="text-sm">Tip: {messageTip}</p>}
                  </div>
                  <div className="space-y-2">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className="p-3 duration-200 rounded-md even:bg-orange-400 even:bg-opacity-10"
                      >
                        <h2 className="text-lg font-bold">
                          {message.name} <span className="text-sm font-light">{message.email}</span>
                        </h2>
                        <div className="text-gray-300">
                          <p className="mt-1 font-semibold">
                            Content: <span className="font-light">{message.content}</span>
                          </p>
                          <p className="mt-1 text-sm font-bold">
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

            <button onClick={fetchMessages} className="py-2 my-2" title="Refresh Messages" disabled={status.loading}>
              {!status.loading ? <i className="text-3xl text-orange-500 ri-refresh-line"></i> : "Fetching..."}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default MessageContent;
