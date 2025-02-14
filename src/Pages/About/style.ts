import { CSSProperties } from "react";
import { Theme } from "@mui/material/styles";

export const getAboutStyles = (theme: Theme) => ({
    textTypingContainer: {
        boxSizing: "border-box", // Adicione isso
        border: "1px solid" + theme.palette.divider,
        borderRadius: "5px",
        padding: "10px",
        position: "relative",
        flex: 1,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontSize: "50px",
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        transition: "background-color 0.3s ease-in-out",
        overflow: "visible",
    } as CSSProperties,

    text: {
        whiteSpace: "pre-wrap", // Permite quebras de linha e ajusta o texto ao contêiner
        wordWrap: "break-word", // Garante que palavras grandes sejam quebradas corretamente
        overflow: "hidden",
        fontSize: "14px",
        color: theme.palette.text.secondary,
        fontFamily: "'Press Start 2P', 'Courier New', monospace",
        textOverflow: "ellipsis",
        transition: "all 0.3s ease",
    } as CSSProperties,
})