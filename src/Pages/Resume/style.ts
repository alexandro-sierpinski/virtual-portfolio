import { CSSProperties } from "react"
import { Theme } from "@mui/material/styles"

export const getResumeStyles = (theme: Theme) => ({
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
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    transition: "all 0.3s ease",
  } as CSSProperties,

  firstSpan: {
    position: "relative",
    transition: "all 0.3s ease",
    zIndex: 10,
  } as CSSProperties,

  lastSpan: {
    color: theme.palette.text.primary,
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
    content: '""',
    position: "absolute",
    bottom: "10%", // Adjust the position of the underline
    left: "50%",  // Start from the center
    width: "0%",  // Start with no width
    height: "1px", // Line thickness
    backgroundColor: theme.palette.text.secondary, // Underline color
    transition: "all 0.3s ease", // Animate width and left position
    zIndex: 50,
    transform: "translateX(-50%)",  // Center the underline horizontally
    transformOrigin: "bottom center",  // Start the transformation from the center
  } as CSSProperties,

  hover: {
    "&::after": {
      width: "100%", // Expands to full width on hover
    },
    "& span:last-of-type": {
      transform: "translateX(-50%) translateY(-100%)",
      opacity: 1,
      transition: "all 0.3s ease",
    },
    "& span:first-of-type": {
      transition: "all 0.3s ease",
    },
  } as CSSProperties,
})
