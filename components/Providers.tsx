'use client'

import { WebMCPProvider } from '@/lib/webmcp'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WebMCPProvider>
      {children}
    </WebMCPProvider>
  )
}
