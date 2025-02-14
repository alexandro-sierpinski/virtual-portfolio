import { Theme } from "@mui/material/styles";
import { CSSProperties } from "react";

export const getImageSliderStyles = (theme: Theme, isMobile: boolean) => ({
  containerSlider: {
    transition: "all 0.3s ease",
    width: isMobile ? 235 : "100%",
    height: "100%",
    position: "absolute",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "5px",
    border: "1px solid",
    borderColor: theme.palette.divider,
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties,

  imageSlider: {
    width: "100%",
    height: isMobile ? "100%" : "80%", // A imagem ocupa 80% da altura do contêiner
    position: "absolute", // Posicionamento absoluto para o slide da imagem
    top: 0,
    left: 0,
    transition: "opacity 0.5s ease-in-out", // Transição suave de opacidade
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties,

  image: {
    borderRadius: "5px",
    display: "block",
    width: "150px", // Tamanho fixo para a imagem
    height: "auto", // Mantém a proporção original
    objectFit: "cover", // Garante que a imagem não distorça
    margin: "0 auto", // Centraliza a imagem horizontalmente    
  } as CSSProperties,

  textSlider: {
    width: "30%",
    height: "20%", // Reduzimos a altura do textSlider para 20%
    position: "absolute", // Posicionamento absoluto para o slide do texto
    bottom: 10,
    left: "50%",
    transform: "translateX(-50%)",
    transition: "opacity 0.5s ease-in-out", // Transição suave de opacidade
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "5px",
  } as CSSProperties,

  text: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "block",
    width: "100%", // Ocupa a largura total do contêiner
    margin: "0 auto", // Centraliza o texto horizontalmente
    padding: "8px", // Adiciona um espaçamento interno para o texto
  } as CSSProperties,
});