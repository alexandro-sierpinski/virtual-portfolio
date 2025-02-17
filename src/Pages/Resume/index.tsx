import { Box, Button, Typography } from "@mui/material";
import { ThemeContext } from "../../Context/Theme/Theme";
import { useContext } from "react";
import { FunctionsContext } from "../../Context/Functions/Functions";
import { getResumeStyles } from "./style";
import curriculo from "../../../static/archives/curriculo.pdf";
import resume from "../../../static/archives/resume.pdf";

export const Resume = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: any;
  };

  const styles = getResumeStyles(theme);

  const { translate, language } = useContext(FunctionsContext) as {
    translate: (key: string) => string;
    language: string;
  };

  const handleButtonClick = () => {
    const fileUrl = language === "pt-BR" ? curriculo : resume;

    // Abordagem 1: Abrir o PDF em uma nova guia
    // window.open(fileUrl, "_blank");

    // Abordagem 2: Forçar o download do PDF
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = language === "pt-BR" ? "curriculo.pdf" : "resume.pdf"; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-evenly",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Button
        color="inherit"
        sx={{
          ...styles.base,
          "&::after": styles.after,
          "&:hover": styles.hover,
        }}
        onClick={handleButtonClick}
      >
        <Typography style={styles.firstSpan}>
          {translate(`pages.resume.download`)}
        </Typography>
      </Button>
    </Box>
  );
};