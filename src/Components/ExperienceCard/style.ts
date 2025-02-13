import { CSSProperties } from "react"
import { Theme } from "@mui/material/styles"

export const getCardStyles = (theme: Theme, color?: string) => ({
  card: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
    margin: theme.spacing(2),
    padding: "30px 20px",
    color: color === "green" ? "white" : "#2E3042",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: theme.custom.cardColor, // Ajuste conforme o tema
    transition: "width 0.3s ease, box-shadow 0.3s ease",  // Ajuste para a animação de width
    width: "calc(100% - 40px)",  // A largura inicial do card (margem considerada)
    "&:hover": {
      width: "calc(110% - 40px)",  // Aumenta a largura para 110% do tamanho original
      transformOrigin: "left",  // Expande a partir da esquerda (lado oposto ao divider)
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
  } as CSSProperties,

  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  } as CSSProperties,

  cardDescription: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: theme.palette.text.secondary,
  } as CSSProperties,

  icon: {
    width: 60,
    height: 60,
    marginBottom: "20px",
    background: "url(https://via.placeholder.com/60) no-repeat center center",
    backgroundSize: "contain",
  } as CSSProperties,
})
