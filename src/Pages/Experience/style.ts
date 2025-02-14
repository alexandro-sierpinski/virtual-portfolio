import { Theme } from "@mui/material";
import { CSSProperties } from "react";

export const getExperienceStyles = (theme: Theme, isMobile: boolean) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: 2,
    borderRadius: 0,
    transition: "all 0.3s ease",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  } as CSSProperties,

  boxExperienceTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  } as CSSProperties,

  boxExperiences: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  } as CSSProperties,

  boxDivider: {
    position: "relative",
    width: isMobile ? "100%" : "60%",
    padding: "20px 0"
  } as CSSProperties,

  divider: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.divider,
    borderRight: "1px dashed rgba(0, 0, 0, 0.12)",
    zIndex: 0,
  } as CSSProperties,

  boxCardExperience: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } as CSSProperties,

  CardExperience: {
    display: "flex",
    width: "100%",
    maxHeight: "300px",
    padding: "20px 0",
  } as CSSProperties,

  boxTextTyping: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  } as CSSProperties,

  boxExperienceText: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  } as CSSProperties,

  textTypingContainerMobile: {
    position: "relative",
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: theme.palette.background.default,
  } as CSSProperties,

  textTypingContainerDesktop: {
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
    transition: "background-color 0.3s ease-in-out",
    overflow: "visible",
  } as CSSProperties,

  dialogExperience: {
    "& .MuiDialog-container": {
      backgroundColor: theme.custom.backgroundColor, // Remove o fundo escuro do Dialog
    },
    "& .MuiPaper-root": {
      backgroundColor: theme.custom.backgroundColor, // Remove o fundo do conteúdo
      boxShadow: "none", // Remove sombra (opcional)
    },
  } as CSSProperties,

  avatarExperience: {
    display: "flex",
    width: "190px",
    height: "100%",
    objectFit: "contain",
    margin: "0 auto",
  } as CSSProperties,

  cardContentLogo: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties,

  appBarExperience: {
    position: 'relative',
    backgroundColor: theme.custom.backgroundColor,
    boxShadow: "none",
    border: "none"
  } as CSSProperties,
})