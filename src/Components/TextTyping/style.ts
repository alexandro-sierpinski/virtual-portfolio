import { CSSProperties } from "react";
import { Theme } from "@mui/material/styles";

export const getIntroTypingStyles = (theme: Theme) => ({
  container: {
    boxSizing: "border-box", // Adicione isso
    position: "relative",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Press Start 2P', 'Courier New', monospace",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    transition: "background-color 0.3s ease-in-out",
    overflow: "visible",
  } as CSSProperties,

  text: {
    whiteSpace: "pre-wrap", // Permite quebras de linha e ajusta o texto ao contêiner
    wordWrap: "break-word", // Garante que palavras grandes sejam quebradas corretamente
    overflow: "hidden",
    fontSize: "20px",
    fontFamily: "'Press Start 2P', 'Courier New', monospace",
    color: theme.palette.text.secondary,
    textOverflow: "ellipsis",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  } as CSSProperties,

  cursor: {
    width: "12px",
    height: "26px",
    backgroundColor: theme.palette.text.secondary,
    marginLeft: "5px",    
    transition: "opacity 0.3s ease-in-out",
  } as CSSProperties,

  cursorVisible: {
    opacity: 1,
  } as CSSProperties,

  cursorHidden: {
    opacity: 0,
  } as CSSProperties,
})