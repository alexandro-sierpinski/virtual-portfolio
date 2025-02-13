import { CSSProperties } from "react";
import { Theme } from "@mui/material/styles";

export const getContainerStyles = (theme: Theme) => ({
  navBar: {
    opacity: 0, // Inicia invisível
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    transition: "opacity 2s ease-in-out", // Transição suave de 2 segundos
  } as CSSProperties,
});
