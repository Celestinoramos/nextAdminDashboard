
'use client'

import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children, themeProps }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
