'use client'

import React, { useEffect } from 'react'
import analytics from '@/lib/analytics'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initial page view tracking
    analytics.page()
  }, [])

  return (
    <>
      {children}
    </>
  )
}
