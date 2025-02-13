import { CardContent, Typography } from '@mui/material'
import { getCardStyles } from './style'
import { ThemeContext } from '../../Context/Theme/Theme'
import { useContext } from 'react'

type Props = {
    title: string
    description: string
    color: string
    icon: string
}

export const ExperienceCard = (props: Props) => {
    const { theme } = useContext(ThemeContext) as {
        theme: any
        darkMode: boolean
        setDarkMode: (darkMode: boolean) => void
    }
    const styles = getCardStyles(theme, props.color)  // Recebe os estilos com base no tema e a cor

    return (
        <div style={styles.card}>
            <CardContent>
                <div style={{ ...styles.icon, backgroundImage: `url(${props.icon})` }} />
                <Typography style={styles.cardTitle}>{props.title}</Typography>
                <Typography style={styles.cardDescription}>{props.description}</Typography>
            </CardContent>
        </div>
    )
}
