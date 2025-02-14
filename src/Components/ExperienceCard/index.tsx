import { Avatar, useMediaQuery, } from '@mui/material'
import { getCardStyles } from './style'
import { ThemeContext } from '../../Context/Theme/Theme'
import { useContext } from 'react'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'

type Props = {
    title: string
    description: string
    logo: string
    index: number
    isMobile: boolean
}

export const ExperienceCard = (props: Props) => {
    const { theme, darkMode } = useContext(ThemeContext) as {
        theme: any
        darkMode: boolean
    }

    const isMobile = useMediaQuery('(max-width: 600px)')
    const styles = getCardStyles(theme, props.index, isMobile, darkMode)
    return (
        <Box>
            {isMobile ? (
                <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                        width: 260,
                        backgroundColor: theme.palette.background.paper
                    }}>
                    <CardContent>
                        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
                            {props.title}
                        </Typography>
                        <Typography level="body-sm">
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
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
            )}

        </Box>
    )
}