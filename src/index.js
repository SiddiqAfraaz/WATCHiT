import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Rubik"',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        type: "dark",
        background: {
            default: "#090909",
            paper: "#121212",
            dark: "#000"
        },
        primary: {
            main: "#2f2f2f",
            dark: "#000000",
            contrastText: "#daceb4"
        },
        secondary: {
            main: "#c1292e",
            dark: "#76191c",
            contrastText: "#fff"
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router forceRefresh={true} >
            <App />
        </Router>
    </ThemeProvider >,
    document.getElementById("root"));