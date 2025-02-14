import { AppBar, Avatar, Box, Button, Dialog, Divider, IconButton, List, Slide, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { forwardRef, useContext, useState } from "react"
import { getPageStyles } from "../StylePages/style"
import { FunctionsContext } from "../../Context/Functions/Functions"
import { ExperienceCard } from "../../Components/ExperienceCard"
import { TextTyping } from "../../Components/TextTyping"
import { getExperienceStyles } from "./style"
import { TransitionProps } from "@mui/material/transitions"
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Experience = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any
  }

  const { translate, getCompanies, language, setLanguage } = useContext(FunctionsContext) as {
    translate: any
    language: string
    setLanguage: (language: string) => void
    getCompanies: () => any
  }

  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 600px)')

  const styles = getExperienceStyles(theme, isMobile)

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

  const handleLanguageChange = (event: React.MouseEvent) => {
    event.stopPropagation() // Impede a propagação do clique e o fechamento do Drawer
    if (setLanguage) {
      setLanguage(language === "pt-BR" ? "en-US" : "pt-BR")
    } else {
      console.error("setLanguage não está definido. Certifique-se de que o UtilsProvider está englobando seu App.")
    }
  }

  const experiences = getCompanies() ? Object.values(getCompanies()) : []

  /* essa lógica garante que se adicionar mais empresas no arquivo Languages.tsx, o divider será exibido */
  const shouldShowDivider = (experiences.length > 3 && experiences.length % 3 === 0) && !isMobile

  return (
    <Box
      sx={{
        ...styles.container,
      }}
    >
      <Box sx={{
        ...styles.boxExperienceTitle
      }}>
        <Typography sx={{
          ...pageStyles.firstSpan
        }}
          variant="h1"
          gutterBottom>
          { isMobile ? (language === "pt-BR" ? "Meu XP" : "My XP") : translate(`experience.title`)}
        </Typography>
      </Box>
      <Box sx={{
        ...styles.boxExperiences
      }}>
        <Box sx={{
          ...styles.boxDivider
        }}>
          {!isMobile && (
            <Divider
              orientation="vertical"
              sx={{
                ...styles.divider
              }}
            />
          )}
          <Box sx={{
            ...styles.boxCardExperience
          }}>
            {experiences.map((exp: any, index: number) => (
              <Box
                key={index}
                sx={{
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  ...styles.CardExperience
                }}
                onClick={() => handleExperienceCardClick(exp.keyCompany)}
              >
                <ExperienceCard
                  title={exp.name}
                  description={exp.duration}
                  logo={exp.logo}
                  index={index}
                  isMobile={isMobile}
                />

              </Box>
            ))}
          </Box>
          {shouldShowDivider && (
            <Divider
              orientation="vertical"
              sx={{
                ...styles.divider
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            ...styles.boxTextTyping
          }}
        >
          {
            (isMobile && selectedExperience) ? (
              // Aqui você pode colocar o que deve acontecer quando for mobile e selectedExperience                
              <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
                sx={{
                  ...styles.dialogExperience
                }}
              >
                <AppBar sx={{
                  ...styles.appBarExperience
                }}>
                  <Toolbar
                    sx={{
                      justifyContent: "space-between"
                    }}
                  >
                    <IconButton
                      edge="start"
                      onClick={() => setOpen(false)}
                      aria-label="close"
                    >
                      <CloseIcon sx={{ color: theme.palette.text.secondary }} />
                    </IconButton>
                    <Box
                      sx={{
                        ...styles.cardContentLogo,
                      }}
                    >
                      <Avatar
                        src={translate(`experience.companies.${selectedExperience}.logo`)}
                        variant="square"
                        sx={{
                          ...styles.avatarExperience
                        }} />
                    </Box>
                    <Button
                      sx={{
                        color: theme.palette.text.secondary
                      }}
                      onClick={handleLanguageChange}>
                      {language === "pt-BR" ? "PT" : "EN"}
                    </Button>
                  </Toolbar>
                </AppBar>
                <List>
                  <TextTyping
                    key={experienceKey} // Chave única para forçar a nova renderização
                    text={`experience.companies.${selectedExperience}.textTyping`} // Passa o texto da experiência diretamente
                    timer={20}
                    styleContainer={styles.textTypingContainerMobile}
                  />
                </List>
              </Dialog>

            ) : (
              // Caso contrário, apenas a condição de selectedExperience
              selectedExperience && (
                <TextTyping
                  key={experienceKey} // Chave única para forçar a nova renderização
                  text={`experience.companies.${selectedExperience}.textTyping`} // Passa o texto da experiência diretamente                  
                  timer={20}
                  styleContainer={styles.textTypingContainerDesktop}
                />
              )
            )
          }
        </Box>
      </Box>
    </Box>
  )
}