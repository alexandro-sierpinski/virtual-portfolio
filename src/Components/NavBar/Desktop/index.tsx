import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { getButtonStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/Theme/Theme"; // Importing the ThemeContext
import { FunctionsContext } from "../../../Context/Functions/Functions";

export const NavBarDesktop = () => {
    const { theme, setDarkMode } = useContext(ThemeContext) as {
        theme: any;
        setDarkMode: (darkMode: boolean) => void;
    };
    const { translate, language, setLanguage } = useContext(FunctionsContext) as {
        translate: (key: string) => string;
        language: string;
        setLanguage: (language: string) => void;
    };

    const buttonStyles = getButtonStyles(theme);
    const navigate = useNavigate();

    // Definindo o estado local para darkMode
    const [darkMode, setDarkModeLocal] = useState<boolean>(false);

    const handleButtonClick = (text: string) => {
        const pageMap = {
            about: "about",
            skills: "skills",
            projects: "projects",
            experience: "experience",
            education: "education",
            resume: "resume",
        };

        navigate(`/${pageMap[text as keyof typeof pageMap] || ""}`);
    };

    const handleLanguageChange = () => {
        if (setLanguage) {
            setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
        } else {
            console.error("setLanguage is not defined. Ensure the UtilsProvider is wrapping your App.");
        }
    };

    useEffect(() => {
        // Lê o valor de darkMode do localStorage ao montar o componente
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode !== null) {
            setDarkModeLocal(savedDarkMode === "true");
        }
    }, []);

    useEffect(() => {
        // Salva o valor de darkMode no localStorage sempre que ele mudar
        localStorage.setItem("darkMode", String(darkMode));
        setDarkMode(darkMode);  // Propaga a mudança para o contexto
    }, [darkMode, setDarkMode]);

    return (
        <AppBar
            position="sticky"
            sx={{
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.divider}`,
                backgroundColor: darkMode ? "transparent" : theme.palette.background.default,
                transition: "all 0.3s ease",
            }}
            >               
            <Toolbar sx={{ height: "100%", justifyContent: "space-between", alignItems: "center", minHeight: "50px" }}>
                <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>
                    {["about", "skills", "projects", "experience", "education", "resume"].map((text) => (
                        <Button
                            key={text}
                            color="inherit"
                            sx={{
                                ...buttonStyles.base,
                                "&::after": buttonStyles.after,
                                "&:hover": buttonStyles.hover,
                            }}
                            onClick={() => handleButtonClick(text)}
                        >
                            <Typography style={buttonStyles.firstSpan}>
                                {translate(`navBar.${text}`)}
                            </Typography>
                            <Typography style={buttonStyles.lastSpan}>
                                {translate(`navBar.${text}`)}
                            </Typography>
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>
                    <Button
                        sx={{
                            ...buttonStyles.base,
                            "&::after": buttonStyles.after,
                            "&:hover": buttonStyles.hover,
                        }}
                        color="inherit"
                        onClick={handleLanguageChange}
                    >
                        <Typography style={buttonStyles.firstSpan}>{language === "pt-BR" ? "PT" : "EN"}</Typography>
                    </Button>
                    <Button
                        sx={{
                            ...buttonStyles.base,
                            "&::after": buttonStyles.after,
                            "&:hover": buttonStyles.hover,
                        }}
                        color="inherit"
                        onClick={() => setDarkModeLocal(!darkMode)}
                    >
                        {darkMode ? <LightModeIcon style={buttonStyles.firstSpan} /> : <DarkModeIcon style={buttonStyles.firstSpan} />}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
