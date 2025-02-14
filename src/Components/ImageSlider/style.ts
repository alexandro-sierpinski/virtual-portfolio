import { Theme } from "@mui/material/styles";

export const getImageSliderStyles = (theme: Theme, darkMode: boolean) => ({
    containerSlider: {
        transition: "all 0.3s ease",            
        width: "100%",
        height: "100%",
        position: "relative",
        margin: "0 auto",
        overflow: "hidden",
        backgroundColor: darkMode ? "" : theme.palette.background.default,
        borderRadius: "5px",
        border: "1px solid",
        borderColor: theme.palette.divider,        
    },

    imageSlider: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,        
        transition: "opacity 0.5s ease-in-out",
        alignItems: "center",
        display: "flex",
        flex: 1,        
    },

    image: {
        borderRadius: "10px",
        display: "block",
        width: "150px", // Tamanho fixo para a logo
        height: "auto", // Mantém a proporção original
        objectFit: "cover", // Garante que a imagem não distorça
        margin: "0 auto", // Centraliza a logo horizontalmente
        justifyContent: "center",
        alignItems: "center",
    }
})
