import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/translations"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [language, setLanguage] = useState<Language>(() =>
    document.documentElement.lang === "en" ? "en" : "id",
  )
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const theme = savedTheme || document.documentElement.getAttribute("data-theme") || "dark"
    document.documentElement.setAttribute("data-theme", theme)
    return theme === "dark"
  })

  useEffect(() => {
    const syncLanguage = () => {
      setLanguage(document.documentElement.lang === "en" ? "en" : "id")
    }
    window.addEventListener("portfolio-language-change", syncLanguage)
    return () => window.removeEventListener("portfolio-language-change", syncLanguage)
  }, [])

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", nextTheme)
    window.localStorage.setItem("theme", nextTheme)
    setIsDark(nextTheme === "dark")
  }

  return (
    <button
      type="button"
      className={cn(
        "theme-toggle relative flex h-8 w-16 cursor-pointer items-center rounded-full border p-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark ? "border-zinc-800 bg-zinc-950" : "border-zinc-200 bg-white",
        className,
      )}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={language === "id"
        ? (isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap")
        : (isDark ? "Switch to light theme" : "Switch to dark theme")}
      title={language === "id"
        ? (isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap")
        : (isDark ? "Switch to light theme" : "Switch to dark theme")}
    >
      <span className="flex w-full items-center justify-between">
        <span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "translate-x-0 bg-zinc-800" : "translate-x-8 bg-gray-200",
          )}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="h-4 w-4 text-gray-700" strokeWidth={1.5} />
          )}
        </span>
        <span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "-translate-x-8",
          )}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
          ) : (
            <Moon className="h-4 w-4 text-black" strokeWidth={1.5} />
          )}
        </span>
      </span>
    </button>
  )
}
