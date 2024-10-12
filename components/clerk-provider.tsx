"use client"
import { useState, useEffect } from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function ClerkProviderCustom({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState("dark")

    return(
        <ClerkProvider
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
        }}
      >
        {children}
      </ClerkProvider>
    )
}
