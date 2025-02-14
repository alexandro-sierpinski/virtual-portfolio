import { useContext, useEffect, useState } from "react";
import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { getImageSliderStyles } from "./style";

type Props = {
    images: string[]; // Alterado para array de strings (caminhos das imagens)
    text: string[]; // Alterado para array de strings (caminhos das imagens)
};

export const ImageSlider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme } = useContext(ThemeContext) as {
        theme: any;
    };

    const isMobile = useMediaQuery('(max-width: 600px)');
    const styles = getImageSliderStyles(theme, isMobile);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [props.images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === props.text.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [props.text.length]);

    return (
        <Box
            sx={{
                ...styles.containerSlider,
            }}
        >
            {/* Imagens do carrossel */}
            {props.images.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        ...styles.imageSlider,
                        opacity: index === activeIndex ? 1 : 0,
                    }}
                >
                    <Avatar
                        src={image}
                        alt={`Imagem ${index}`}
                        sx={{
                            ...styles.image,
                        }}
                    />
                </Box>
            ))}

            {/* Textos do carrossel */}
            {!isMobile &&    
                props.text.map((text, index) => (
                    <Box
                        key={index}
                    sx={{
                        ...styles.textSlider,
                        opacity: index === activeIndex ? 1 : 0,
                    }}
                >
                    <Typography sx={{ ...styles.text }}>
                        {text}
                    </Typography>
                </Box>
            ))}            
        </Box>
    );
};
