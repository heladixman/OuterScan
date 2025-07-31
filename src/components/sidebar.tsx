"use client"

import { useState } from "react"
import {
  PlusIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  CodeBracketIcon,
  SparklesIcon,
  CpuChipIcon,
  EllipsisHorizontalIcon,
  FolderIcon,
} from "@heroicons/react/24/outline"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [showMoreChats, setShowMoreChats] = useState(false)

  const navigationItems = [
    { icon: PlusIcon, label: "New chat", active: false },
    { icon: MagnifyingGlassIcon, label: "Search chats", active: false },
  ]

  const chats = ["Logo design concept", "Instrumen Suara Video", "Instrumen Suara Video 2", "Instrumen Suara Video 3"]

  if (!isOpen) return null

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Navigation */}
      <div className="p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Chats Section */}
      <div className="px-4 py-2 flex-1">
        <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Chats</h3>
        <div className="space-y-1">
          {chats.map((chat, index) => (
            <div key={index} className="px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded cursor-pointer">
              {chat}
            </div>
          ))}

          {!showMoreChats && (
            <button
              onClick={() => setShowMoreChats(true)}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-400 hover:text-gray-300"
            >
              <EllipsisHorizontalIcon className="w-4 h-4" />
              See more
            </button>
          )}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
            DJ
          </div>
          <div>
            <div className="text-sm font-medium">Derek Johnson</div>
            <div className="text-xs text-gray-400">Plus</div>
          </div>
        </div>
      </div>
    </div>
  )
}