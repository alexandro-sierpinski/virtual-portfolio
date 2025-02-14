import { Box, Divider, Typography, useMediaQuery, styled, Dialog } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { useContext, useState } from "react"
import { getPageStyles } from "../StylePages/style"
import { FunctionsContext } from "../../Context/Functions/Functions"
import { ExperienceCard } from "../../Components/ExperienceCard"
import { TextTyping } from "../../Components/TextTyping"
import { getExperienceStyles } from "./style"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export const Experience = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const { translate, getCompanies } = useContext(FunctionsContext) as {
    translate: any
    language: string
    getCompanies: () => any
  }

  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 600px)')

  const styles = getExperienceStyles(theme)

  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  const [experienceKey, setExperienceKey] = useState<number>(0) // Chave única para forçar a renderização

  const pageStyles = getPageStyles(theme)

  const handleExperienceCardClick = (text: string) => {
    setSelectedExperience(text) // Atualiza o texto da experiência selecionada
    setExperienceKey((prevKey) => prevKey + 1) // Atualiza a chave para forçar a renderização
    if (isMobile) {
      setOpen(true)
    }
  }

  const experiences = getCompanies() ? Object.values(getCompanies()) : []

  /* essa lógica garante que se adicionar mais empresas no arquivo Languages.tsx, o divider será exibido */
  const shouldShowDivider = experiences.length > 3 && experiences.length % 3 === 0

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderRadius: 0,
        transition: "all 0.3s ease",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        ...pageStyles.base,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography sx={pageStyles.firstSpan} variant="h1" gutterBottom>
          {translate(`experience.title`)}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
        <Box sx={{ position: "relative", width: isMobile ? "100%" : "60%", padding: "20px 0" }}>
          <Divider
            orientation="vertical"
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,              
              backgroundColor: theme.palette.divider,
              borderRight: "1px dashed rgba(0, 0, 0, 0.12)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            {experiences.map((exp: any, index: number) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  width: "100%",
                  maxHeight: "300px",
                  padding: "20px 0",                  
                }}
                onClick={() => handleExperienceCardClick(exp.keyCompany)}
              >
                  <ExperienceCard
                    title={exp.name}
                    description={exp.duration}
                    logo={exp.logo}
                    index={index}
                  />                  
                
              </Box>
            ))}
          </Box>
          {shouldShowDivider && (
            <Divider
              orientation="vertical"
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                backgroundColor: theme.palette.divider,
                borderRight: "1px dashed rgba(0, 0, 0, 0.12)",
                zIndex: 0,
              }}
            />
          )}
        </Box>
        <Box
          sx={{           
            flex: 1,
            display: "flex",
            alignItems: "center",
            ...pageStyles.base,
            
          }}
        >
          {
            (isMobile && selectedExperience) ? (
              // Aqui você pode colocar o que deve acontecer quando for mobile e selectedExperience
              <BootstrapDialog
                onClose={() => setOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <TextTyping
                  key={experienceKey} // Chave única para forçar a nova renderização
                  text={`experience.companies.${selectedExperience}.textTyping`} // Passa o texto da experiência diretamente
                  timer={20}
                  styleContainer={styles.textTypingContainer}
                />

              </BootstrapDialog>
            ) : (
              // Caso contrário, apenas a condição de selectedExperience
              selectedExperience && (
                <TextTyping
                  key={experienceKey} // Chave única para forçar a nova renderização
                  text={`experience.companies.${selectedExperience}.textTyping`} // Passa o texto da experiência diretamente                  
                  timer={20}
                  styleContainer={styles.textTypingContainer}                  
                />
              )
            )
          }
        </Box>
      </Box>
    </Box>
  )
}