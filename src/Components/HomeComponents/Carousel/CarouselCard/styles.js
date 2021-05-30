import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    movie: {
        position: "relative",
        padding: "17vw 0 8vw 7vw",
        width: "30%",
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
    movieGenre: {
        fontSize: "min(3vw, 0.75rem)",
        lineHeight: "min(3vw, 0.75rem)",
        display: "inline-flex",
        marginRight: "5px",
        paddingBottom: "20px",
        color: theme.palette.primary.contrastText,
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
    addButton: {
        fontSize: "0.75rem",
        position: "absolute",
        padding: "0.75rem",
        marginTop: "0.5rem",
        marginLeft: "0.5rem",
        color: theme.palette.secondary.contrastText,
        opacity: "80%",
    }
}));