import { CSSProperties } from "react";

export const getContainerStyles = (isOnPage: boolean) => ({
  primalBox: {
    position: "relative",
    overflow: "overlay",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    zIndex: 2,
    backgroundColor: isOnPage ? "rgba(18, 18, 18, 0.8)" : ""
  } as CSSProperties,

  navBar: {
    opacity: 0, // Inicia invisível
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    transition: "opacity 2s ease-in-out", // Transição suave de 2 segundos
  } as CSSProperties,

  matrixBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Força para trás de tudo
    pointerEvents: "none",
  } as CSSProperties,

  bodyBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    position: "relative",
    zIndex: 2,
    opacity: 1
  } as CSSProperties,
});
