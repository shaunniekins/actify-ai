"use client";

import { useState } from "react";

const DashboardComponent = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setProcessing(true);
      resetPrompt();
      console.log(prompt);
    }
  };

  const resetPrompt = () => {
    setPrompt("");
  };

  return (
    <>
      <div className="h-[100svh] w-screen py-8">
        <div className="container mx-auto w-screen h-full">
          <div className="flex flex-col justify-between h-full px-96">
            <button
              className="px-5 py-2 bg-red-300 self-end rounded-lg"
              onClick={() => resetPrompt}>
              Restart
            </button>
            {/* <h1>hello</h1> */}
            <div className="bg-red-600 h-full"></div>
            <input
              className="rounded-lg bg-gray-300 text-black w-full py-3 px-2"
              disabled={processing}
              type="text"
              name="promptInput"
              id="promptInput"
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
