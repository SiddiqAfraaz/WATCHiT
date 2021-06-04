import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    moreInfo: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        flexShrink: 0,
        width: "100%",
        textAlign: "left",
        alignItems: "stretch",
        boxShadow: `0 2px 10px ${theme.palette.background.default} inset`
    },
    moreInfoWrapper: {
        padding: "1vw 2vw 0.5vw 5vw",
        width: "100%",
    },
    streamDiv: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        [theme.breakpoints.down(900)]: {
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
        },
    },
    streamHead: {
        fontWeight: "600"
    },
    streamImg: {
        width: "60px",
        height: "60px",
        borderRadius: "50px",
        margin: "5px",
        [theme.breakpoints.down(500)]: {
            width: "40px",
            height: "40px",
        },
    },
}));