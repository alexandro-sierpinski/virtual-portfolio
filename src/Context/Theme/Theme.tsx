import { createTheme } from "@mui/material";
import { createContext, useState, useEffect } from "react";

declare module "@mui/material/styles" {
    interface Theme {
        custom: {
            cardColor: string;
            cardGradient?: string;
        };
    }
    interface ThemeOptions {
        custom?: {
            cardColor?: string;
            cardGradient?: string;
        };
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // 1. Inicializando 'darkMode' a partir do localStorage (se não houver, será false por padrão)
    const savedDarkMode = localStorage.getItem("darkMode");
    const [darkMode, setDarkMode] = useState(savedDarkMode === "true");

    // 2. Usar useEffect para atualizar o localStorage quando 'darkMode' mudar
    useEffect(() => {
        // Salva o estado do darkMode no localStorage
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]); // Esse efeito roda sempre que 'darkMode' mudar

    // 3. Criando o tema com base no valor atual de 'darkMode'
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: darkMode ? "#23e875" : "#ad1186",
            },
            background: {
                default: darkMode ? "transparent" : "#f1f1f1",
                paper: darkMode ? "rgba(18, 18, 18, 0.7)" : "#f1f1f1",
            },
            divider: darkMode ? "#23e875" : "#ad1186",
            text: {
                primary: darkMode ? "#fff" : "#000",
                secondary: darkMode ? "#1c9c54" : "#360a2b",
            },
        },
        custom: {
            cardColor: darkMode ? "rgba(35, 232, 117, 0.7)" : "#f1f1f1",
            cardGradient: darkMode ? 
                "linear-gradient(to top, rgba(28, 156, 84,0.4), rgba(28, 156, 84,0) 200px), linear-gradient(to top, rgba(28, 156, 84,0.8), rgba(28, 156, 84,0) 300px)" 
                : 
                "linear-gradient(to top, rgba(54, 10, 43,0.4), rgba(54, 10, 43,0) 200px), linear-gradient(to top, rgba(54, 10, 43,0.8), rgba(54, 10, 43,0) 300px)",
        },
    });

    // 4. Retorna o contexto com o tema, darkMode e a função para alterar o estado de darkMode
    return (
        <ThemeContext.Provider value={{ theme, darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};