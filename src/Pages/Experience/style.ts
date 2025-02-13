import { CSSProperties } from "react";

export const getExperienceStyles = (theme: any) => ({
  boxExperienceText: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
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
  } as CSSProperties
})