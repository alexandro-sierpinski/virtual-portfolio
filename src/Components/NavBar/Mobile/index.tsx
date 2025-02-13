import { useState } from "react"
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { ThemeContext } from "../../../Context/Theme/Theme"
import { useContext } from "react"
import { TranslateContext } from "../../../Context/Languages/Translate"
import { useNavigate } from "react-router-dom"

export const NavBarMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate();
  const { theme, darkMode, setDarkMode } = useContext(ThemeContext) as {
    theme: any
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
  }
  const { language, setLanguage, translate } = useContext(TranslateContext) as {
    language: string
    setLanguage: (language: string) => void
    translate: (key: string) => string
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return
    }
    setDrawerOpen(open)
  }

  const handleLanguageChange = (event: React.MouseEvent) => {
    event.stopPropagation() // Impede a propagação do clique e o fechamento do Drawer
    if (setLanguage) {
      setLanguage(language === "pt-BR" ? "en-US" : "pt-BR")
    } else {
      console.error("setLanguage não está definido. Certifique-se de que o UtilsProvider está englobando seu App.")
    }
  }

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

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", darkMode.toString())
  }

  const menuItems = ["about", "skills", "projects", "experience", "education", "resume"]

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          height: "50px",
          boxShadow: "none",
          backgroundColor: theme.palette.background.default,
          borderBottom: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar sx={{ height: "100%", justifyContent: "space-between", alignItems: "center", minHeight: "50px" }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ color: theme.palette.text.primary }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" onClick={() => {
              handleThemeChange()
            }} sx={{ color: theme.palette.text.primary }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: theme.palette.background.default,
            height: "100%"
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} onClick={() => handleButtonClick(item)}>
                <ListItemText
                  primary={translate(`navBar.${item}`)} // Traduz os itens dinamicamente
                  sx={{ color: theme.palette.text.primary }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
            <IconButton
              color="inherit"
              onClick={handleLanguageChange} // Não fecha o Drawer
              sx={{
                borderRadius: "3px",
                width: "90%",
                marginBottom: "10px",
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark, // Cor do hover
                },
                '&:active': {
                  backgroundColor: theme.palette.primary.dark, // Cor ao clicar
                },
                '&:focus': {
                  backgroundColor: theme.palette.primary.main, // Cor do foco
                },
              }}
            >
              <Typography sx={{ color: theme.palette.text.primary }}>{language === "pt-BR" ? "PT" : "EN"}</Typography>
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
