import { Box, Typography } from "@mui/material"
import { ThemeContext } from "../../../Context/Theme/Theme"
import { useContext } from "react"

export const FooterDesktop = () => {
    const { theme, darkMode  } = useContext(ThemeContext) as {
        theme: any
        darkMode: boolean
    }
    return (
        <Box
            component="footer"
            position="static"
            sx={{
                width: "100%",
                textAlign: "center",
                py: 2,
                backgroundColor: darkMode ? "transparent" : theme.palette.background.default,
                color: theme.palette.text.primary,
                bottom: 0,
                transition: "all 0.3s ease",
            }}
        >
            <Typography variant="body2">© 2025 - Todos os direitos reservados.</Typography>
        </Box>
    )
}
