import { Theme } from "@mui/material/styles";
import { CSSProperties } from "react";

export const getCardStyles = (theme: Theme, index: number) => ({
  cardBox: {
    height: "250px",
    cursor: "pointer",
    width: "calc(100% - 530px)",
    perspective: '1000px',
    transition: 'transform 0.4s',
    '& > div, & > div > div': {
      transition: 'inherit',
    },
    '&:hover': {
      '& > div': {
        transform: index % 2 === 0 ? 'rotateY(30deg)' : 'rotateY(-30deg)',
        '& > div:nth-child(2)': {
          transform: index % 2 === 0 ? 'scaleY(0.9) translate3d(20px, 30px, 40px)' : 'scaleY(0.9) translate3d(-20px, 30px, 40px)',
        },
        '& > div:nth-of-type(2)': {
          transform: index % 2 === 0 ? 'translate3d(45px, 50px, 40px)' : 'translate3d(-45px, 50px, 40px)',
        },
      },
    },
  } as CSSProperties,

  card: {
    minHeight: '200px',
    width: 320,
    backgroundColor: '#fff',
    borderColor: '#000',
    background: theme.custom.cardGradient,
  } as CSSProperties,

  logo: {
    display: "block",
    width: "190px", // Tamanho fixo para a logo
    height: "auto", // Mantém a proporção original
    objectFit: "contain", // Garante que a imagem não distorça
    margin: "0 auto", // Centraliza a logo horizontalmente
  } as CSSProperties,

  cardCover: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
    border: '1px solid',
    borderColor: theme.custom.cardGradient,
    backdropFilter: 'blur(1px)',
  } as CSSProperties, 

  cardContentDescription: {
    alignItems: 'self-start',
    justifyContent: 'flex-start',
    borderRadius: '5px',
    border: '1px solid',
    borderColor: theme.custom.cardGradient,
    backdropFilter: 'blur(1px)',
  } as CSSProperties,

  cardContentText: {
    height: '60%',
    fontSize: 'lg',
    m: 2,
  } as CSSProperties,

  cardContentLogo: {
    alignItems: 'self-end',
    justifyContent: 'flex-end',
    background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
    border: '1px solid',
    borderRadius: '5px',
    borderColor: '#000',
    backdropFilter: 'blur(1px)',
  } as CSSProperties,
})
