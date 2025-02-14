import { Avatar, Box, Divider, Stack } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { useContext } from "react";
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

export const About = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any;
  };

  const { translate } = useContext(FunctionsContext) as {
    translate: (key: string) => string;
  };

  const styles = getAboutStyles(theme);

  const listCarousel = [
    delphi_Logo_12,
    java_Logo,
    react,
    javascript_logo,
    python_logo,
    django_logo,
    electron_logo,
    firebird_logo,
    hibernate_logo,
    junit_logo,
    mongo_logo,
    node_logo,
  ];

  return (
    <Box
      sx={{        
        padding: 1,
        borderRadius: 0,
        transition: "all 0.3s ease",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "relative", // Adicionado para garantir que o z-index funcione
        zIndex: 3, // Definindo z-index
        opacity: 1, // Definindo opacidade        
      }}
    >      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",          
        }}
      >
        <TextTyping
          text={translate(`about.text`)}
          styleContainer={styles.textTypingContainer}
          styleText={styles.text}
          timer={10}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "5%",
        }}
      >
        <Divider
          orientation="vertical"
          sx={{
            position: "absolute",
            top: 10,
            bottom: 0,
            backgroundColor: theme.palette.divider,
            borderRight: "1px dashed rgba(0, 0, 0, 0.12)",
            zIndex: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "37%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              border: "2px solid",
              borderColor: theme.palette.divider,
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Avatar
              sx={{
                width: 260,
                height: 260,
                border: "1px solid",
                position: "relative", // Garante que não seja afetado pela opacidade do pai
                zIndex: 10, // Deixa o Avatar visível
              }}
              src={avatar}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            transition: "all 0.3s ease",
            width: "100%",
            position: "relative", // Garante que o ImageSlider não fique transparente            
          }}
        >
          <ImageSlider images={listCarousel} />
        </Box>
      </Box>
    </Box>
  );
};