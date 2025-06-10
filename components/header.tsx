"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "@/public/logo.png"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium">
              <Image src={Logo} alt="Logo MetrôCCB" width={120} height={80} />
            </span>
          </Link>
          {mounted && (
            <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Alternar tema"
            className="rounded-full"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
