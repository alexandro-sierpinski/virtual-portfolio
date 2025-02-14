import { AppBar, Avatar, Box, Button, Dialog, Divider, IconButton, List, Slide, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { forwardRef, useContext, useState } from "react";
import { TextTyping } from "../../Components/TextTyping";
import { FunctionsContext } from "../../Context/Functions/Functions";
import { getAboutStyles } from "./style";
import avatar from "../../Assets/avatar.jpeg";
import delphi_Logo_12 from "../../Assets/Delphi_Logo_12.svg";
import java_Logo from "../../Assets/java_Logo.png";
import react from "../../Assets/react.svg";
import javascript_logo from "../../Assets/java_script_logo.svg";
import python_logo from "../../Assets/python_logo.png";
import django_logo from "../../Assets/django-logo.webp";
import electron_logo from "../../Assets/electron_logo.svg";
import firebird_logo from "../../Assets/firebird_logo.png";
import hibernate_logo from "../../Assets/hibernate_logo.png";
import junit_logo from "../../Assets/junit_logo.png";
import mongo_logo from "../../Assets/mongoDB_logo.png";
import node_logo from "../../Assets/node_logo.svg";
import { ImageSlider } from "../../Components/ImageSlider";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const About = () => {
  const { theme, darkMode, setDarkMode } = useContext(ThemeContext) as {
    theme: any;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
  };

  const { translate, language, setLanguage } = useContext(FunctionsContext) as {
    translate: (key: string) => string;
    language: string;
    setLanguage: (language: string) => void;
  };

  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 600px)');

  const styles = getAboutStyles(theme, isMobile);

  const handleExperienceCardClick = () => {
    setOpen(true)
  }

  const handleLanguageChange = (event: React.MouseEvent) => {
    event.stopPropagation() // Impede a propagação do clique e o fechamento do Drawer
    if (setLanguage) {
      setLanguage(language === "pt-BR" ? "en-US" : "pt-BR")
    } else {
      console.error("setLanguage não está definido. Certifique-se de que o UtilsProvider está englobando seu App.")
    }
  }

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", darkMode.toString())
  }

  const listCarousel = [
    {
      image: delphi_Logo_12,
      text: "Delphi"
    },
    {
      image: java_Logo,
      text: "Java"
    },
    {
      image: react,
      text: "React"
    },
    {
      image: javascript_logo,
      text: "JavaScript"
    },
    {
      image: python_logo,
      text: "Python"
    },
    {
      image: django_logo,
      text: "Django"
    },
    {
      image: electron_logo,
      text: "Electron"
    },
    {
      image: firebird_logo,
      text: "Firebird"
    },
    {
      image: hibernate_logo,
      text: "Hibernate"
    },
    {
      image: junit_logo,
      text: "JUnit"
    },
    {
      image: mongo_logo,
      text: "MongoDB"
    },
    {
      image: node_logo,
      text: "Node.js"
    },
  ];

  return (
    <Box
      sx={{
        ...styles.container,
      }}
    >
      {
        (isMobile && open) ? (
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
                <Box>
                  <Button
                    sx={{
                      color: theme.palette.text.secondary
                    }}
                    onClick={handleLanguageChange}>
                    {language === "pt-BR" ? "PT" : "EN"}
                  </Button>                
                  <IconButton color="inherit" onClick={() => {
                    handleThemeChange()
                  }} sx={{ color: theme.palette.text.primary }}>
                    {darkMode ? <LightModeIcon sx={{ color: theme.palette.text.secondary }} />
                      :
                      <DarkModeIcon sx={{ color: theme.palette.text.secondary }} />}
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            <List>
              <TextTyping
                text={translate(`about.text`)}
                styleContainer={styles.textTypingContainer}
                styleText={styles.text}
                timer={10}
              />
            </List>
          </Dialog>

        ) : (
          !isMobile &&
          <Box
            sx={{
              ...styles.boxTextTyping,
            }}
          >
            <TextTyping
              text={translate(`about.text`)}
              styleContainer={styles.textTypingContainer}
              styleText={styles.text}
              timer={10}
            />
          </Box>
        )
      }
      {!isMobile &&
        <Box
          sx={{
            ...styles.boxDivider,
          }}
        >
          <Divider
            orientation="vertical"
            sx={{
              ...styles.divider,
            }}
          />
        </Box>
      }
      <Box
        sx={{
          ...styles.boxAvatarAndImageSlider,
        }}
      >
        <Box
          sx={{
            ...styles.boxAvatar,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              ...styles.StackAvatar,
            }}
          >
            <Avatar
              sx={{
                ...styles.Avatar,
              }}
              src={avatar}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            ...styles.boxImageSlider,
          }}
        >
          <ImageSlider 
          images={listCarousel.map(item => item.image) }
          text={listCarousel.map(item => item.text)}
          />
        </Box>
        {isMobile &&
          <Button
            onClick={handleExperienceCardClick}
            sx={{
              ...styles.buttonExperience
            }}
          >
            {language === "pt-BR" ? "Sobre Mim" : "About Me"}
          </Button>
        }
      </Box>
    </Box>
  );
};