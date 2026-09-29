import { useState } from "react"
import { applyLanguage, type Language } from "@/lib/translations"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("language")
    return savedLanguage === "en" ? "en" : "id"
  })

  function selectLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage)
    applyLanguage(nextLanguage)
  }

  return (
    <div
      className={cn("language-switch", language === "en" && "is-en")}
      role="group"
      aria-label={language === "id" ? "Pilih bahasa" : "Select language"}
    >
      <button
        type="button"
        onClick={() => selectLanguage("id")}
        aria-pressed={language === "id"}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => selectLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
