import { Box } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { useContext } from "react"
import { TextTyping } from "../../Components/TextTyping"
import { FunctionsContext } from "../../Context/Functions/Functions"

export const Skills = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const { translate } = useContext(FunctionsContext) as {
    translate: (key: string) => string
  }

  return (
    <Box sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderRadius: 0,
        flex: 1,
        display: "flex",
        boxShadow: theme.shadows[3],
        transition: 'all 0.3s ease',
        }}>
      <TextTyping text={translate("inBuilding.text")} />
    </Box>      
  )
}
