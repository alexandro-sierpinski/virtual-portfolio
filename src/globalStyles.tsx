import { GlobalStyles } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const globalStyles = (theme: Theme) => (
  <GlobalStyles
    styles={{
      /* Scrollbar padrão (Chrome, Edge, Safari) */
      "::-webkit-scrollbar": {
        width: theme.palette.mode === "dark" ? "1px" : "10px",
        height: "8px",        
      },
      "::-webkit-scrollbar-thumb": {
        background: theme.palette.text.secondary, // Cor da barra
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.divider,
      },
      "::-webkit-scrollbar-track": {
        background: theme.custom.backgroundScrollBar, // Evita que apareça um fundo sólido
      },

      /* Se o tema NÃO for dark, adiciona essas propriedades */
      ...(theme.palette.mode !== "dark" && {
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: `${theme.palette.text.secondary} ${theme.custom.backgroundScrollBar}`,
        },
      }),

      /* Garante que a barra não afete a largura da página */
      "html, body": {
        margin: 0,
        padding: 0,
      },
    }}
  />
);
