"use client"

import { useState } from "react"
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

interface ModelSelectorProps {
  selectedModel: string
  onModelChange: (model: string) => void
}

const models = [
  {
    name: "GPT-4o",
    description: "Great for most tasks",
    selected: true,
  },
  {
    name: "o3",
    description: "Uses advanced reasoning",
    selected: false,
  },
  {
    name: "o4-mini",
    description: "Fastest at advanced reasoning",
    selected: false,
  },
  {
    name: "o4-mini-high",
    description: "Great at coding and visual reasoning",
    selected: false,
  },
]

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:bg-gray-700"
      >
        <span className="font-medium">{selectedModel}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-600">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Models
            </div>
          </div>

          <div className="p-2">
            {models.map((model, index) => (
              <button
                key={index}
                onClick={() => {
                  onModelChange(model.name)
                  setIsOpen(false)
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded-lg text-left"
              >
                <div>
                  <div className="font-medium text-white">{model.name}</div>
                  <div className="text-sm text-gray-400">{model.description}</div>
                </div>
                {selectedModel === model.name && <CheckIcon className="w-4 h-4 text-green-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}