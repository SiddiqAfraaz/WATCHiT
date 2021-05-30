import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    heading: {
        display: "flex",
        padding: "1vw 2vw 1vw 1.5vw",
        color: theme.palette.secondary.contrastText,
    },
    slide: {
        textAlign: 'center',
        fontSize: "18px",
        background: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "auto",
    },
    artist: {
        display: "block",
        textAlign: "center",
        padding: "0 20px"
    },
    but: {
        borderRadius: "30px"
    },
    castAvatar: {
        width: "13vw",
        height: "13vw",
        [theme.breakpoints.down(1100)]: {
            width: "20vw",
            height: "20vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "35vw",
            height: "35vw",
        },
    },
    artistName: {
        color: theme.palette.secondary.contrastText,
        lineHeight: "18px",
        marginTop: "10px",
        whiteSpace: "wrap",
        width: "13vw",
        [theme.breakpoints.down(1100)]: {
            width: "20vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "35vw",
        },
    },
    artistCharacter: {
        color: theme.palette.primary.contrastText,
        lineHeight: "10px",
        fontSize: "min(3vw, 0.75rem)",
        display: "inline-block",
        whiteSpace: "nowrap",
        width: "13vw",
        [theme.breakpoints.down(1100)]: {
            width: "20vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "35vw",
        },
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
}));