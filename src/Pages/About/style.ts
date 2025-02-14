import { CSSProperties } from "react";
import { Theme } from "@mui/material/styles";

export const getAboutStyles = (theme: Theme, isMobile: boolean) => ({

    container: {
        padding: 1,
        borderRadius: 0,
        transition: "all 0.3s ease",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.background.default,
    } as CSSProperties,

    boxTextTyping: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
    } as CSSProperties,

    textTypingContainer: {
        boxSizing: "border-box", // Adicione isso
        border: isMobile ? "none" : "1px solid" + theme.palette.divider,
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
        color: theme.palette.text.secondary,
        transition: "background-color 0.3s ease-in-out",
        overflow: "visible",
    } as CSSProperties,

    text: {
        whiteSpace: "pre-wrap", // Permite quebras de linha e ajusta o texto ao contêiner
        wordWrap: "break-word", // Garante que palavras grandes sejam quebradas corretamente
        overflow: "hidden",
        fontSize: "14px",
        color: theme.palette.text.secondary,
        fontFamily: "'Press Start 2P', 'Courier New', monospace",
        textOverflow: "ellipsis",
        transition: "all 0.3s ease",
    } as CSSProperties,

    boxDivider: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "5%",
    } as CSSProperties,

    divider: {
        position: "absolute",
        top: 10,
        bottom: 0,
        backgroundColor: theme.palette.divider,
        borderRight: "1px dashed rgba(0, 0, 0, 0.12)",
        zIndex: 0,
    } as CSSProperties,

    boxAvatarAndImageSlider: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "37%",
        flexDirection: "column",
    } as CSSProperties,

    boxAvatar: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: 2,
    } as CSSProperties,

    StackAvatar: {
        border: "1px solid",
        borderColor: theme.palette.divider,
        borderRadius: 1,
        padding: 2,
    } as CSSProperties,

    Avatar: {
        width: isMobile ? 200 : 260,
        height: isMobile ? 200 : 260,
        border: "1px solid",
        position: "relative", // Garante que não seja afetado pela opacidade do pai
        zIndex: 10, // Deixa o Avatar visível
    } as CSSProperties,

    boxImageSlider: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        transition: "all 0.3s ease",
        width: "100%",
        position: "relative", // Garante que o ImageSlider não fique transparente 
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

    appBarExperience: {
        position: "sticky",
        flex: 1,
        display: "flex",
        backgroundColor: theme.custom.backgroundColor,
        boxShadow: "none",
        border: "none"
    } as CSSProperties,

    cardContentLogo: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    } as CSSProperties,

    boxIconTheme: {
        display: "flex",
        alignItems: "center"
    } as CSSProperties,

    buttonExperience: {
        margin: 1,
        height: "50px",
        width: "100%",
        border: "1px solid",
        borderRadius: "5px",
        borderColor: theme.palette.divider,
        color: theme.palette.text.secondary,
    } as CSSProperties,
})