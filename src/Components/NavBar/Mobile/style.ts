import { Theme } from "@mui/material";
import { CSSProperties } from "react";

export const getNavBarMobileStyles = (theme: Theme) => ({
    appBar: {
        height: "50px",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: "all 0.3s ease",
    } as CSSProperties,

    toolbar: {
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "50px"
    } as CSSProperties,

    boxIconTheme: {
        display: "flex",
        alignItems: "center"
    } as CSSProperties,

    drawer: {
        "& .MuiPaper-root": {
            backgroundColor: theme.custom.backgroundColor, // Fundo transparente
            boxShadow: "none", // Remove a sombra
        }
    } as CSSProperties,

    boxDrawer: {
        width: 250,
        backgroundColor: theme.palette.background.default,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    } as CSSProperties,

    boxDrawerFooter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    } as CSSProperties,

    iconButtonDrawer: {
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
    } as CSSProperties,
})