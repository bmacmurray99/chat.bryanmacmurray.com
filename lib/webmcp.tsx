'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface WebMCPAction {
  name: string
  description: string
  parameters: Record<string, any>
  callback: (params: any) => Promise<any>
}

interface WebMCPContextType {
  registerAction: (action: WebMCPAction) => void
  unregisterAction: (name: string) => void
}

const WebMCPContext = createContext<WebMCPContextType | undefined>(undefined)

export function WebMCPProvider({ children }: { children: React.ReactNode }) {
  const [actions, setActions] = useState<Record<string, WebMCPAction>>({})

  const registerAction = (action: WebMCPAction) => {
    setActions((prev) => ({ ...prev, [action.name]: action }))
  }

  const unregisterAction = (name: string) => {
    setActions((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  // In a real implementation, this would expose the actions to an MCP server or client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__webmcp_actions__ = actions
    }
  }, [actions])

  return (
    <WebMCPContext.Provider value={{ registerAction, unregisterAction }}>
      {children}
    </WebMCPContext.Provider>
  )
}

export function useWebMCP() {
  const context = useContext(WebMCPContext)
  if (!context) {
    throw new Error('useWebMCP must be used within a WebMCPProvider')
  }
  return context
}
