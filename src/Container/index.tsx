import { useState, useEffect, useContext } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { NavBarDesktop } from "../Components/NavBar/Desktop"
import { NavBarMobile } from "../Components/NavBar/Mobile"
import { Outlet, useLocation } from "react-router-dom"
import { FooterDesktop } from "../Components/Footer/Desktop"
import { FooterMobile } from "../Components/Footer/Mobile"
import { ThemeContext } from "../Context/Theme/Theme"
import { getContainerStyles } from './style' // Importa os estilos

import { TranslateContext } from "../Context/Languages/Translate"
import { TextTyping } from "../Components/TextTyping"

export const Container = () => {
  const [showNavBar, setShowNavBar] = useState(false) // Controla a visibilidade do NavBar
  const isMobile = useMediaQuery("(max-width: 600px)")
  const location = useLocation()
  const { theme } = useContext(ThemeContext) as {
    theme: any
    darkMode: boolean
  }
  const styles = getContainerStyles(theme) // Obtém os estilos

  // Páginas definidas no Router
  const validRoutes = ["/about", "/skills", "/projects", "/experience", "/education", "/resume"]
  const isOnPage = validRoutes.includes(location.pathname)
  const { language } = useContext(TranslateContext) as {
    language: string
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavBar(true)
    }, isOnPage ? 0 : (language === "pt-BR" ? 6000 : 5000))

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: theme.palette.background.default,
    }}>
      {/* Renderiza o NavBar com a animação de fade-in */}
      <Box
        sx={{
          ...styles.navBar,
          opacity: showNavBar ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
      </Box>

      {/* Conteúdo */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", boxShadow: "none" }}>
        {isOnPage ? <Outlet /> : <TextTyping text={`introTyping.text`} />}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          ...styles.navBar,
          opacity: showNavBar ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </Box>
    </Box>
  )
}
