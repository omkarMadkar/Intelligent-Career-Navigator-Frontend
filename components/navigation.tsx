"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, User, Bell, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Resume Analysis", href: "/resume-analysis" },
  { name: "Mock Interview", href: "/mock-interview" },
  { name: "Mentors", href: "/mentors" },
  { name: "Home", href: "/" },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded font-bold text-sm">
              ICN
            </div>
            <span className="font-semibold text-lg text-foreground">Intelligent Career Navigator</span>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Icons and User */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-3 text-sm font-medium">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
