import { Avatar, } from '@mui/material'
import { getCardStyles } from './style'
import { ThemeContext } from '../../Context/Theme/Theme'
import { useContext } from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

type Props = {
    title: string
    description: string
    logo: string
    index: number
}

export const ExperienceCard = (props: Props) => {
    const { theme } = useContext(ThemeContext) as {
        theme: any
        darkMode: boolean
        setDarkMode: (darkMode: boolean) => void
    }
    const styles = getCardStyles(theme, props.index)
    return (
        <Box
            sx={{
                ...styles.cardBox,
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    ...styles.card,
                }}
            >
                <Typography
                    level="h2"
                    textColor="#fff"
                    sx={{ 
                        fontSize: 'lg' 
                        }}>
                    {props.title}
                </Typography>
                <CardCover
                    sx={{
                        ...styles.cardCover,
                    }}
                >
                    <CardContent sx={{
                        ...styles.cardContentDescription,                       
                    }}>
                        <Typography
                            level="h2"
                            textColor="#fff"
                            sx={{
                                ...styles.cardContentText,                              
                            }}>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardCover>
                <CardContent
                    sx={{
                        ...styles.cardContentLogo,
                    }}
                >
                    <Avatar src={props.logo} sx={{ ...styles.logo }} variant="square" />
                </CardContent>
            </Card>
        </Box>
    );
}