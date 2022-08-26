import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
    palette: {
      primary: {
        main: '#E8C723',
      },
      secondary: {
        main: '#E8C723',
      },
    },
    typography: {
        fontFamily: "Luckiest Guy",
    },
    background: {
        paper: "#aeb7c2",
        default: "#aeb7c2",
      },
    // overrides: {
    //     MuiCssBaseline: {
    //       "@global": {
    //         body: {
    //           backgroundImage:
    //             "url(https://designshack.net/wp-content/uploads/gradient-background.jpg)"
    //         }
    //       }
    //     }
    // }
  });

export { appTheme }