import { Box } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { useContext } from "react"
import { TextTyping } from "../../Components/TextTyping"
import { TranslateContext } from "../../Context/Languages/Translate"


export const Education = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const { translate } = useContext(TranslateContext) as {
    translate: (key: string) => string
  }

  return (
    <Box sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        flex: 1,
        display: "flex",
        borderRadius: 0,
        boxShadow: theme.shadows[3],
        transition: 'all 0.3s ease',
        }}>
      <TextTyping text={translate("inBuilding.text")} />
    </Box>
  )
}
