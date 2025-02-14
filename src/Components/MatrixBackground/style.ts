export const getMatrixBackgroundStyles = () => ({
  canvasContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Para garantir que o canvas fique atrás de outros elementos     
    overflow: "hidden",
  },
  canvas: {
    display: "block",
  },
});