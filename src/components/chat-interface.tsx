"use client"

import type React from "react"

import { useState } from "react"
import { PlusIcon,  } from "@heroicons/react/24/outline"

export function ChatInterface() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Handle message submission
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-white mb-8">What can I help with?</h1>
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative bg-gray-800 border border-gray-600 rounded-2xl overflow-hidden">
            <div className="flex items-center p-4">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 mr-3"
              >
                <PlusIcon className="w-4 h-4" />
              </button>

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything"
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
              />

              <div className="flex items-center gap-2 ml-3">
                <button
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}