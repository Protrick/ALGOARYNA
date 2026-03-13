"use client";

import React, { useEffect, useState } from "react";

interface Props {
  roomCode: string;
}

export default function PlayClient({ roomCode }: Props) {
  const [language, setLanguage] = useState("C++17");
  const [timeLeft, setTimeLeft] = useState(5400); // 1.5 hours
  const [hasStarted, setHasStarted] = useState(false);

  const startTime = "18:00 IST"; 

  // Timer
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-850 to-purple-950 text-slate-200">

      {/*Navbar */}
      <div className="border-b border-indigo-900/40 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-md">


        <span className="text-xl font-bold tracking-tight text-white">
              AlgoAryna
        </span>

        <div className="flex items-center gap-8">

         {/* Select Language */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-black border border-indigo-500/50 text-sm px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <option>C++17</option>
            <option>Java</option>
            <option>Python3</option>
          </select>

          {/* Timer */}
          {!hasStarted ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-200">
                Starts at: <span className="text-white-500">{startTime}</span>
              </span>

              <button
                onClick={() => setHasStarted(true)}
                className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-md text-sm hover:opacity-90 transition shadow-md"
              >
                Start
              </button>
            </div>
          ) : (
            <div
              className={`text-sm font-semibold ${
                timeLeft < 600 ? "text-red-400" : "text-purple-400"
              }`}
            >
              ⏳ {formatTime(timeLeft)}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 transition rounded-md text-sm">
            Run
          </button>

          <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition rounded-md text-sm shadow-md">
            Submit
          </button>
        </div>
      </div>

      
      {/* Main Layout */}
      <div className="px-8 py-6 flex gap-6">

        <div className="w-[50%] bg-black/40 border border-blue-600/20 rounded-xl p-6 h-[calc(100vh-140px)] overflow-y-auto shadow-lg">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-purple-300">
              Longest Path in Directed Acyclic Graph
            </h2>

            <span className="bg-purple-600/20 text-purple-400 px-3 py-1 text-xs rounded-md">
              HARD
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            Given a Directed Acyclic Graph (DAG) with N vertices and M edges,
            find the length of the longest path in the graph.
          </p>

          <div className="space-y-6 text-sm">

            <div className="bg-slate-900 rounded-sm p-2 w-50">
              <h3 className="font-semibold text-indigo-300 mb-2">
                Input Format
              </h3>
              <p className="text-slate-300">
                First line contains N and M. <br />
                Next M lines contain x and y.
              </p>
            </div>

            <div className="bg-slate-900 rounded-sm p-4 w-50">
              <h3 className="font-semibold text-indigo-300 mb-2">
                Output Format
              </h3>
              <p className="text-slate-300">
                Print a single integer representing the longest path.
              </p>
            </div>

          </div>
        </div>

        {/* Right DIV */}
        <div className="w-[55%] flex flex-col gap-6">

          {/* Code Editor */}
          <div className="bg-black/50 border border-blue-600/20 rounded-xl p-6 flex flex-col h-[70%] shadow-lg">

            <h2 className="font-semibold mb-4 text-indigo-300">
              Code Editor
            </h2>

            <textarea
              // disabled={!hasStarted}
              className="flex-1 bg-black border border-purple-900/50 rounded-lg p-4 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none disabled:opacity-40"
              placeholder="// Write your code here..."
            />
          </div>

          {/* Live Poll */}
          <div className=" bg-black/40 border border-blue-600/20 rounded-xl p-4 h-[30%] shadow-lg">

           <h2 className="font-semibold mb-3 text-purple-300">
               Live Standings
             </h2>

             <div className="text-sm">

               <div className="grid grid-cols-3 text-slate-400 border-b border-indigo-900/30 pb-2 mb-3">
                 <span>Rank</span>
                 <span>User</span>
                 <span className="text-right">Score</span>
              </div>

               <div className="space-y-2">
                <div className="grid grid-cols-3">
                   <span className="text-purple-400">1</span>
                   <span>Tourist</span>
                   <span className="text-right text-white-400">
                     2400
                   </span>
                </div>

                 <div className="grid grid-cols-3">
                     <span className="text-purple-400">2</span>
                   <span className="text-white-400">
                     You
                   </span>
                   <span className="text-right">
                     1250
                   </span>
                 </div>

               </div>

             </div>

           </div>

        </div>
      </div>
    </div>
  );
}