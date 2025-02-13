import { CSSProperties } from "react"
import { Theme } from "@mui/material/styles"

export const getButtonStyles = (theme: Theme) => ({
  base: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "0px",
    height: "9vh",
    color: theme.palette.text.primary,
    display: "inline-block",
    fontSize: "18px", // match h3 font-size
    lineHeight: "1.5", // match h3 line-height
    padding: "18px 18px 17px",
    textDecoration: "none",
    cursor: "pointer",
    background: theme.palette.background.default,
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
  } as CSSProperties,

  firstSpan: {
    position: "relative",
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
  } as CSSProperties,

  lastSpan: {
    color: theme.palette.text.primary,
    display: "block",
    position: "absolute",
    bottom: 0,
    transition: "all 500ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: 0,
    top: "50%",
    left: "50%",
    transform: "translateY(225%) translateX(-50%)",
    height: "14px",
    lineHeight: "13px",
  } as CSSProperties,

  after: {
    content: '""',
    position: "absolute",
    bottom: "10%", // Adjust the position of the underline
    left: "50%",  // Start from the center
    width: "0%",  // Start with no width
    height: "1px", // Line thickness
    backgroundColor: theme.palette.text.secondary, // Underline color
    transition: "width 0.25s ease-out, left 0.25s ease-out", // Animate width and left position
    zIndex: 50,
    transform: "translateX(-50%)",  // Center the underline horizontally
    transformOrigin: "bottom center",  // Start the transformation from the center
  } as CSSProperties,

  hover: {
    "&::after": {
      width: "100%", // Expands to full width on hover
    },
    "& span:last-child": {
      transform: "translateX(-50%) translateY(-100%)",
      opacity: 1,
      transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
    },
    "& span:first-child": {
      transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    },
  } as CSSProperties,
})
