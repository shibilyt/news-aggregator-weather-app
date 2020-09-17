import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Setting up the App theme
let theme = createMuiTheme({
  palette: {
    common: {
      black: "#333",
      white: "#fafafa",
    },
    primary: {
      main: "#709C9F",
    },
    secondary: { main: "#BE396E" },
    dark: {
      main: "#30343A",
    },
    light: {
      main: "#F7F6F0",
    },
  },
  background: "#F7F6F0",

  typography: {
    fontFamily: "Merriweather, Montserrat",
    fontSize: 20,
    body1: {
      fontSize: 20,
      fontFamily: "Montserrat",
      lineHeight: 1.65,
    },
    h1: {
      fontFamily: "Merriweather",
    },
    h2: {
      fontFamily: "Merriweather",
    },
    h3: {
      fontFamily: "Merriweather",
    },
    h4: {
      fontFamily: "Merriweather",
    },
    h5: {
      fontFamily: "Merriweather",
    },
    h6: {
      fontFamily: "Merriweather",
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: "Merriweather",
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          color: "#30343A",
          textDecoration: 'none'
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
