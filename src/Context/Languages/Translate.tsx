import { createContext, useEffect, useState, ReactNode } from "react";
import { Languages } from "./Languages";

// Define a tipagem correta para o contexto
interface TranslateContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
  getCompanies: () => any; // Adiciona a função ao contexto
}

// Cria o contexto com um valor padrão
export const TranslateContext = createContext<TranslateContextType | undefined>(undefined);

interface TranslateProviderProps {
  children: ReactNode;
}

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const [language, setLanguage] = useState<string>("pt-BR");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") ?? "pt-BR";
    if (savedLanguage && Languages[savedLanguage as keyof typeof Languages]) {
      setLanguage(savedLanguage);
    }
    console.log("Idioma carregado do localStorage:", savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    console.log("Idioma atualizado:", language);
  }, [language]);

  const translate = (key: string) => {
    const keys = key.split(".");
    let value: any = Languages[language as keyof typeof Languages];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        console.warn(`Chave de tradução não encontrada: ${key}`);
        return key;
      }
    }

    return value;
  };

  // Função para buscar as empresas
  const getCompanies = () => {
    if (Languages[language as keyof typeof Languages] && Languages[language as keyof typeof Languages].experience) {
      return Languages[language as keyof typeof Languages].experience.companies;
    }
    return null;
  };

  return (
    <TranslateContext.Provider value={{ 
      language, 
      setLanguage, 
      translate,
      getCompanies, // Adiciona a função ao contexto
    }}>
      {children}
    </TranslateContext.Provider>
  );
};