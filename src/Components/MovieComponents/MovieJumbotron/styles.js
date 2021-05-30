import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    movie: {
        overflow: "auto",
        position: "relative",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        width: "100%",
        color: theme.palette.primary.contrastText,
        padding: "8vw 3vw 5vw 5vw",
        [theme.breakpoints.down(1100)]: {
            flexDirection: "column",
            textAlign: "center",
            margin: "auto",
            justifyContent: "center",
            padding: "10vw auto",
        },
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            flexDirection: "row",
            alignItems: "center",
            textAlign: "left",
            justifyContent: "center",
        },
    },
    poster: {
        width: "20vw",
        height: "30vw",
        [theme.breakpoints.down(1100)]: {
            width: "40vw",
            height: "60vw",
            marginTop: "10vw"
        },
        [`${theme.breakpoints.down(1100)} and (orientation: landscape)`]: {
            width: "18vw",
            height: "27vw",
            marginTop: 0
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexShrink: 0,
        boxShadow: `2px 2px 10px ${theme.palette.background.dark}`
    },
    brokenImage: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
    imageIcon: {
        margin: "auto",
        fontSize: "10vw"
    },
    moviePosterName: {
        maxWidth: "100%",
        fontWeight: "600"
    },
    movieDetails: {
        textAlign: "left",
        width: "80%",
        margin: "50px",
        [theme.breakpoints.down(1100)]: {
            width: "90%",
            textAlign: "center",
            marginTop: '20px',

        },
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            left: "100%",
            bottom: "10%",
            textAlign: "left",
            width: "80%",
            margin: "50px",
        },
    },
    movieName: {
        color: theme.palette.secondary.contrastText,
        fontSize: "min(6vw, 2.125rem)",
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(4vw, 1.5rem)",
            lineHeight: "min(4vw, 1.5rem)",
        },
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
    ratingWrapper: {
        fontSize: "min(4vw, 1rem)",
    },
    rating: {
        display: "inline-flex",
        alignItems: "flex-end",
        justifyContent: "center",
        fontSize: "5rem",
    },
    ratingIcon: {
        color: theme.palette.secondary.contrastText,
    },
    ratingTextLarge: {
        marginLeft: "5px",
        fontSize: "min(7vw, 1.5rem)",
        fontWeight: "500",
        color: theme.palette.secondary.contrastText,
    },
    ratingText: {
        fontSize: "min(4vw, 1rem)",
        opacity: "60%",
    },
    movieText: {
        fontSize: "min(3.4vw, 1rem)",
        lineHeight: 1.3,
        display: "block",
        overflow: "hidden",
        color: theme.palette.primary.contrastText,
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(1.7vw, 1rem)",
            lineHeight: "min(3vw, 1rem)",
        },
    },
    buttonGrp: {
        margin: "0.75rem 0",
    },
    button: {
        display: "inline-block",
        lineHeight: 1,
        textTransform: "none",
        paddingBottom: "12px",
        textAlign: "left",
        color: theme.palette.secondary.contrastText,
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(1.7vw, 2rem)",
            padding: "5px"
        },

    },
    // addButton: {
    //     fontSize: "0.75rem",
    //     position: "absolute",
    //     padding: "0.75rem",
    //     marginTop: "0.5rem",
    //     marginLeft: "0.5rem",
    //     [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
    //         padding: "0.75rem",
    //         marginTop: "0.2rem",
    //         marginLeft: "0.2rem",
    //     },
    //     color: theme.palette.primary.contrastText,
    // }
    streamDiv: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down(1100)]: {
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
        },
    },
    streamSec: {
        paddingRight: "30px",
    },
    streamHead: {
        fontSize: "1rem",
        fontWeight: "600"
    },
    streamImg: {
        width: "60px",
        height: "60px",
        borderRadius: "50px",
        margin: "5px"
    }
}));