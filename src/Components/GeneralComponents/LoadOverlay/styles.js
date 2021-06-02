import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    loadBG: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 99,
        cursor: "progress",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
    },
    content: {
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "15%",
        margin: "20px",
        [theme.breakpoints.down(500)]: {
            width: "35%",
        },
    },
    progressBar: {
        width: "40%",
        [theme.breakpoints.down(500)]: {
            width: "70%",
        },
    }
}));