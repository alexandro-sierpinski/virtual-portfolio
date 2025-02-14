import { useContext, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { getMatrixBackgroundStyles } from "./style";
import { ThemeContext } from "../../Context/Theme/Theme";
import { Container } from "../../Container";

export const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const stylesMatrixBackground = getMatrixBackgroundStyles();
    const { theme, darkMode } = useContext(ThemeContext) as {
        theme: any;
        darkMode: boolean;
    };

    useEffect(() => {
        if (!darkMode) return; // Garante que só roda se o darkMode estiver ativo

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Redimensiona o canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas ao redimensionar
        };

        resizeCanvas(); // Ajusta o tamanho inicial
        window.addEventListener("resize", resizeCanvas);

        // Caracteres do efeito Matrix
        const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");

        const fontSize = 10;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = theme.palette.divider;
            ctx.font = `${fontSize}px arial`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 35);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [darkMode, theme.palette.divider]); // Atualiza se o tema mudar

    return (
        <Box>
            {darkMode && (
                <Box sx={stylesMatrixBackground.canvasContainer}>
                    <canvas ref={canvasRef} style={stylesMatrixBackground.canvas} />
                </Box>
            )}
            <Container />
        </Box>
    );
};
