import { useState, useEffect, useContext } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { NavBarDesktop } from "../Components/NavBar/Desktop"
import { NavBarMobile } from "../Components/NavBar/Mobile"
import { Outlet, useLocation } from "react-router-dom"
import { FooterDesktop } from "../Components/Footer/Desktop"
import { FooterMobile } from "../Components/Footer/Mobile"
import { getContainerStyles } from './style' // Importa os estilos
import { FunctionsContext } from "../Context/Functions/Functions"
import { TextTyping } from "../Components/TextTyping"

export const Container = () => {
  const [showNavBar, setShowNavBar] = useState(false) // Controla a visibilidade do NavBar
  const isMobile = useMediaQuery("(max-width: 600px)")
  const location = useLocation()  
  // Páginas definidas no Router
  const validRoutes = ["/about", "/skills", "/projects", "/experience", "/education", "/resume"]
  const isOnPage = validRoutes.includes(location.pathname)
  const styles = getContainerStyles(isOnPage) // Obtém os estilos
  const { language } = useContext(FunctionsContext) as {
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
      ...styles.primalBox
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
      <Box sx={{
        ...styles.bodyBox
      }}>
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
