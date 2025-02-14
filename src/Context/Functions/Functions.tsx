import { createContext, useEffect, useState, ReactNode } from "react"
import { Languages } from "./Languages"

// Define a tipagem correta para o contexto
interface FunctionsContextType {
  language: string
  setLanguage: (lang: string) => void
  translate: (key: string) => string
  getCompanies: () => any // Adiciona a função ao contexto
}

// Cria o contexto com um valor padrão
export const FunctionsContext = createContext<FunctionsContextType | undefined>(undefined)

interface FunctionsProviderProps {
  children: ReactNode
}

export const FunctionsProvider = ({ children }: FunctionsProviderProps) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem("language") ?? "pt-BR")
  const languages = Languages[language as keyof typeof Languages]

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") ?? "pt-BR"
    if (savedLanguage && Languages[savedLanguage as keyof typeof Languages]) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const translate = (key: string) => {
    const keys = key.split(".")
    let value: any = languages

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key
      }
    }

    return value
  }

  // Função para buscar as empresas
  const getCompanies = () => {
    if (languages && languages.experience) {
      return languages.experience.companies
    }
    return null
  }

  return (
    <FunctionsContext.Provider value={{
      language,
      setLanguage,
      translate,
      getCompanies, // Adiciona a função ao contexto
    }}>
      {children}
    </FunctionsContext.Provider>
  )
}