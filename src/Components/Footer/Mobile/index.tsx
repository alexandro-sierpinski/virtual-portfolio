import { Box, Typography } from "@mui/material"
import { ThemeContext } from "../../../Context/Theme/Theme"
import { useContext } from "react"

export const FooterMobile = () => {
    const { theme } = useContext(ThemeContext) as {
        theme: any
    }
    return (
        <Box
            component="footer"
            position="static"
            sx={{
                width: "100%",
                textAlign: "center",
                py: 2,
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                bottom: 0,
            }}
        >
            <Typography variant="body2">© 2025 - Todos os direitos reservados.</Typography>
        </Box>
    )
}
