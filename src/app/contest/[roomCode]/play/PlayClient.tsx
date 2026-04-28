'use client'

import React, { useState } from 'react'
import Editor from '@monaco-editor/react'

const LANGUAGES = [
  { label: 'C++', value: 'cpp' },
  { label: 'Python', value: 'python' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Java', value: 'java' },
  { label: 'Go', value: 'go' },
]

export default function PlayClient() {
  const [language, setLanguage] = useState('cpp')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0a0a0c] text-indigo-100 font-sans">
      
      {/* ── NAVBAR ── */}
      <header className="flex items-center justify-between px-8 h-16 bg-[#0a0a0c] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{"</>"}</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">AlgoAryna</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 italic">
            Room: <span className="text-purple-500 font-mono">#9921</span>
          </div>
          <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 italic">
          <button className="hover:text-white transition-colors">Log Out</button>
          </div>
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT: Problem Description */}
        <aside className="w-[38%] flex flex-col bg-[#0d0d0f] border-r border-white/5 shadow-2xl">
          <div className="p-8 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase tracking-widest">Medium</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Problem 01</span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">House Robber</h1>
            </div>

            <p className="text-[15px] leading-relaxed text-gray-400 font-light">
              You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. 
              The only constraint stopping you from robbing each of them is that adjacent houses have security systems connected.
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h3 className="text-[11px] font-bold text-purple-500 uppercase tracking-widest text-opacity-80">Constraints</h3>
              <ul className="text-xs text-gray-500 space-y-2 font-mono">
                <li>• 1 &lt;= nums.length &lt;= 100</li>
                <li>• 0 &lt;= nums[i] &lt;= 400</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* RIGHT: Code Editor Area */}
        <main className="flex-1 flex flex-col bg-[#0a0a0c] p-4 relative">
          
          <div className="flex-1 flex flex-col rounded-2xl border border-purple-500/20 bg-[#0d0d0f] overflow-hidden shadow-[0_0_60px_-15px_rgba(168,85,247,0.15)]">

            <div className="h-14 flex items-center justify-between px-6 bg-white/5 border-b border-white/5">
              
              <div className="flex items-center gap-6">


                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>

                {/* Language Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.06] transition-all group"
                  >
                    <span className="text-[11px] font-mono font-medium text-gray-400 group-hover:text-purple-400 transition-colors uppercase tracking-widest">
                      {LANGUAGES.find(l => l.value === language)?.label}
                    </span>
                    <span className={`text-[8px] text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {isDropdownOpen && (
                    <>

                      <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                      
                      <div className="absolute top-full left-0 mt-2 w-40 py-2 rounded-xl bg-[#0a0a0c] border border-white/10 shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {LANGUAGES.map((lang) => (
                          <div 
                            key={lang.value}
                            onClick={() => {
                              setLanguage(lang.value);
                              setIsDropdownOpen(false);
                            }}
                            className="px-4 py-2 text-[11px] font-mono text-gray-400 hover:text-white hover:bg-purple-600/20 cursor-pointer transition-colors"
                          >
                            {lang.label}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <span className="text-[11px] font-mono text-gray-600 border-l border-white/10 pl-6">
                  solution.{language === 'python' ? 'py' : language === 'javascript' ? 'js' : language}
                </span>
              </div>
              
              <div className="flex gap-4">
                <button className="px-5 py-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors">
                  Run
                </button>
                <button className="px-6 py-1.5 text-xs font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30">
                  Submit Arena
                </button>
              </div>
            </div>

            {/* Monaco Editor Container */}
            <div className="flex-1 pt-4 bg-[#0d0d0f]">
              <Editor
                height="100%"
                theme="vs-dark"
                language={language}
                defaultValue={`// AlgoAryna Optimization V2\nint solve(vector<int>& nums) {\n    int n = nums.size();\n    // Write code here...\n    return 0;\n}`}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  fontFamily: 'JetBrains Mono, monospace',
                  padding: { top: 10 },
                }}
              />
            </div>

            {/* Status Bar */}
            <div className="h-14 flex items-center justify-between px-6 bg-black/40 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[11px] font-mono text-green-500/80 uppercase tracking-widest"></span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}