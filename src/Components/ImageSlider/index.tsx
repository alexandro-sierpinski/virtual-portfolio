import { useContext, useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { getImageSliderStyles } from "./style";

type Props = {
    images: string[]; // Alterado para array de strings (caminhos das imagens)
};

export const ImageSlider = ({ images }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme, darkMode } = useContext(ThemeContext) as {
        theme: any;
        darkMode: boolean;
    };

    const styles = getImageSliderStyles(theme, darkMode);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box
            sx={{
                ...styles.containerSlider                
            }}
        >
            {/* Imagens do carrossel */}
            {images.map((image, index) => (
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
                            ...styles.image
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};