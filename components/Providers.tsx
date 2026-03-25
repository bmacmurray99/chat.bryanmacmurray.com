'use client'

import React, { useEffect } from 'react'
import analytics from '@/lib/analytics'
import Clarity from '@microsoft/clarity'

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initial page view tracking
    analytics.page()

    // Clarity initialization
    if (CLARITY_ID) {
      Clarity.init(CLARITY_ID)
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
