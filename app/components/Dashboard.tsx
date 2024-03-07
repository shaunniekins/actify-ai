"use client";

import { useState, useRef, useEffect } from "react";
import { runChat } from "../api/gemini-ai";
import LoadingView from "./Loading";
import { MdOutlineRestartAlt } from "react-icons/md";

type Message = {
  sender: "user" | "model";
  text: string;
};

const DashboardComponent = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setPrompt("");
      setProcessing(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: prompt },
      ]);
      const chatResponse = await runChat(prompt);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "model", text: chatResponse },
      ]);
      setProcessing(false);
      //   console.log(chatResponse);
    }
  };

  const resetPrompt = () => {
    setMessages([]);
  };

  return (
    <>
      <div className="h-[100svh] w-screen py-8 overflow-hidden">
        <div className="md:container md:mx-auto w-screen h-full">
          <div className="flex flex-col gap-3 justify-between h-full px-5 md:px-96">
            <button
              className="px-3 py-2 bg-red-600 self-end rounded-lg"
              onClick={resetPrompt}>
              <MdOutlineRestartAlt className="w-6 h-6" />
            </button>
            {messages.length === 0 && (
              <div className="py-10 flex flex-col gap-2">
                <h1 className="text-sky-600 text-5xl font-sans font-normal">
                  Hi, Stranger
                </h1>
                <h1 className="text-5xl font-sans font-semibold leading-tight">
                  How can I help <br />
                  you today?
                </h1>
              </div>
            )}
            {/* <h1>hello</h1> */}
            <div className="py-5 h-full flex flex-col gap-5 overflow-y-auto">
              {messages.map((message, index) => (
                <p
                  key={index}
                  className={`${
                    message.sender === "user"
                      ? "text-right text-sky-600"
                      : "text-left text-white"
                  }`}>
                  {message.text}
                </p>
              ))}
              {processing && <LoadingView />}
              <div ref={endOfMessagesRef} />
            </div>
            <textarea
              className="resize-none overflow-hidden rounded-lg bg-gray-300 text-black w-full py-2 px-2"
              rows={2}
              disabled={processing}
              placeholder="Enter prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => handleSubmit(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
