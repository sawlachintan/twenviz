import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode | undefined) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  primary: {
                      main: "#eae3ff",
                  },
                  secondary: {
                      main: "#ffffff",
                  },
                  divider: "#eeeeee",
                  background: {
                      paper: "#1f1f1f",
                      default: "#161616",
                  },
                  text: {
                      primary: "#eae3ff",
                      icon: "#eae3ff",
                  },
              }
            : {
                  primary: {
                      main: "#040740",
                  },
                  secondary: {
                      main: "#1a1a1a",
                  },
                  divider: "#000000",
                  background: {
                      paper: "#efecf9",
                      default: "#eae3ff",
                  },
                  text: {
                      primary: "#1a1a1a",
                      icon: "#1a1a1a",
                  },
              }),
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            fontWeight: 800,
            fontSize: "2.5rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.15rem",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.15rem",
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.45rem",
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.15rem",
        },
        body1: {
            fontSize: "1.15rem",
            fontWeight: 500,
        },
        body2: {
            fontSize: "1.15rem",
            fontWeight: 600,
        },
    },
});
