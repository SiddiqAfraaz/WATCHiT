import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    movie: {
        position: "relative",
        padding: "17vw 0 8vw 7vw",
        width: "36%",
        textAlign: "left",
        height: "17vw",
        [theme.breakpoints.down(1100)]: {
            padding: "70vw 0 10vw 0",
            height: "15vw",
            margin: "0 auto",
            width: "80%",
            textAlign: "center",
        },
        [theme.breakpoints.down(500)]: {
            padding: "100vw 0 10vw 0",
            height: "50vw",
            margin: "0 auto",
            width: "80%",
            textAlign: "center",
        },
        [`${theme.breakpoints.down(1100)} and (orientation: landscape)`]: {
            padding: "25vw 0 10vw 0",
            textAlign: "left",
            height: "20vw",
        },
    },
    movieName: {
        fontSize: "min(7vw, 2.125rem)",
        color: theme.palette.secondary.contrastText,
    },
    movieSubtitle: {
        color: theme.palette.primary.contrastText,
        fontSize: "min(3.5vw, 0.9rem)",
        lineHeight: "min(4vw, 1rem)",
        display: "inline-flex",
        marginRight: "5px",
        paddingBottom: "10px",
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(2vw, 0.5rem)",
            lineHeight: "min(2vw, 0.5rem)",
        },
    },
    movieText: {
        fontSize: "min(4vw, 1rem)",
        lineHeight: 1.2,
        maxHeight: "min(12vw, 3rem)",
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    button: {
        position: "relative",
        margin: "0.75rem 0",
    },
}));