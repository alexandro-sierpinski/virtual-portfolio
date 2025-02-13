import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { useContext } from "react"
import { getPageStyles } from "../StylePages/style"

export const About = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const pageStyles = getPageStyles(theme)

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderRadius: 0,        
        transition: "all 0.3s ease",
        flex: 1,  // Faz com que o Box ocupe todo o espaço disponível
        display: "flex",
        flexDirection: "column",
        ...pageStyles.base,
      }}
    >
      <Typography sx={pageStyles.firstSpan} variant="h1" gutterBottom>
        h1. ABOUT
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', padding: '20px 0' }}>
      {/* Linha vertical central transparente */}
      <Divider
        orientation="vertical"
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          borderRight: '2px dashed rgba(0, 0, 0, 0.12)', // Linha tracejada transparente
          zIndex: 0,
        }}
      />

      {/* Conteúdo alternado à esquerda e à direita */}
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Primeiro Paper à esquerda */}
        <Grid item xs={6}>
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5">Open Source Developer</Typography>
            <Typography variant="subtitle1">Self-employed</Typography>
            <Typography variant="body2">Fevereiro 2025 - Presente</Typography>
            <Typography variant="body1">Descrição curta da experiência em português</Typography>
          </Paper>
        </Grid>

        {/* Segundo Paper à direita */}
        <Grid item xs={6} sx={{ marginTop: '80px' }}> {/* Adiciona margem para alternar */}
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5">Freelancer</Typography>
            <Typography variant="subtitle1">Self-employed</Typography>
            <Typography variant="body2">Fevereiro 2025 - Presente</Typography>
            <Typography variant="body1">Descrição curta da experiência em português</Typography>
          </Paper>
        </Grid>

        {/* Terceiro Paper à esquerda */}
        <Grid item xs={6}>
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5">Outra Experiência</Typography>
            <Typography variant="subtitle1">Empresa X</Typography>
            <Typography variant="body2">Janeiro 2024 - Dezembro 2024</Typography>
            <Typography variant="body1">Descrição curta da experiência em português</Typography>
          </Paper>
        </Grid>

        {/* Adicione mais Grid items conforme necessário, alternando a margem para alinhar à esquerda ou direita */}
      </Grid>
    </Box>
      
    </Box>
  )
}
