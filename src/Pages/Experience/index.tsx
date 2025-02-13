import { Box, Divider, Typography, Button } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { useContext, useState } from "react";
import { getPageStyles } from "../StylePages/style";
import { TranslateContext } from "../../Context/Languages/Translate";
import { ExperienceCard } from "../../Components/ExperienceCard";
import { TextTyping } from "../../Components/TextTyping";
import { getExperienceStyles } from "./style";

export const Experience = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any;
  };

  const { translate, getCompanies } = useContext(TranslateContext) as {
    translate: any;
    language: string;
    getCompanies: () => any;
  };

  const styles = getExperienceStyles(theme);

  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [experienceKey, setExperienceKey] = useState<number>(0); // Chave única para forçar a renderização

  const pageStyles = getPageStyles(theme);

  const handleExperienceCardClick = (text: string) => {
    setSelectedExperience(text); // Atualiza o texto da experiência selecionada
    setExperienceKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar a renderização
  };

  const experiences = getCompanies() ? Object.values(getCompanies()) : [];

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
        <Box sx={{ position: "relative", width: "60%", padding: "20px 0" }}>
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
                  padding: "20px 0",
                }}
              >
                <Button
                  sx={{
                    height: "230px",
                    width: "400px",
                    padding: 0,
                    minWidth: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)", // Rotate left or right
                    },
                  }}
                  onClick={() => handleExperienceCardClick(exp.keyCompany)} // Passa a experiência completa
                >
                  <ExperienceCard
                    title={exp.name}
                    description={exp.duration}
                    color={theme.palette.text.secondary}
                    icon={exp.icon}
                  />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "40%",
            height: "100vh",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            transition: "all 0.3s ease",
            alignItems: "center",
            ...pageStyles.base,
            borderRadius: "10px",
            backgroundColor: theme.palette.background.default, // Cor de fundo temporária
            color: theme.palette.text.primary,
            padding: "20px",
            textAlign: "center",
          }}
        >
          {selectedExperience && ( // Renderiza o TextTyping apenas se houver uma experiência selecionada
            <TextTyping
              key={experienceKey} // Chave única para forçar a nova renderização
              text={`experience.companies.${selectedExperience}.textTyping`} // Passa o texto da experiência diretamente
              timer={20}
              styleContainer={styles.textTypingContainer}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};