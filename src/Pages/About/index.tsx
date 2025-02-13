import { Box } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { useContext } from "react"
import { getPageStyles } from "../StylePages/style"
import { TextTyping } from "../../Components/TextTyping"
import { TranslateContext } from "../../Context/Languages/Translate"


export const About = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const { translate } = useContext(TranslateContext) as {
    translate: (key: string) => string
  }

  const pageStyles = getPageStyles(theme)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderRadius: 0,        
        transition: "all 0.3s ease",
        flex: 1,  // Faz com que o Box ocupe todo o espaço disponível
        display: "flex",
        flexDirection: "column",
        ...pageStyles.base,
      }}
    >
      <TextTyping text={translate("inBuilding.text")} />
      
    </Box>
  )
}
