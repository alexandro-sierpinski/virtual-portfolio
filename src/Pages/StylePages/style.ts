import { CSSProperties } from "react"
import { Theme } from "@mui/material/styles"

export const getPageStyles = (theme: Theme) => ({
  base: {
    transition: "all 0.3s ease",
  } as CSSProperties,

  firstSpan: {
    position: "relative",
    transition: "all 0.3s ease",  
  } as CSSProperties,

  lastSpan: {
    color: theme.palette.text.primary, // 🔥 Pega do theme
    display: "block",
    position: "absolute",
    bottom: 0,
    transition: "all 0.3s ease",
    zIndex: 100,
    opacity: 0,
    top: "50%",
    left: "50%",
    transform: "translateY(225%) translateX(-50%)",
    height: "14px",
    lineHeight: "13px",
  } as CSSProperties,

  after: {
    position: "absolute",
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "30%", // 🔥 Ajuste para 30%
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  } as CSSProperties,
})
