import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        position: "relative",
        display: 'flex',
        flexDirection: "column"
    },
    container1: {
        display: 'flex',
        flexDirection: "row",
        overflow: "auto",
        position: "relative",
        [theme.breakpoints.down(1100)]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"

        },
        margin: "2vw 0"
    },
    container2: {
        display: 'flex',
        flexDirection: "row",
        overflow: "auto",
        position: "relative",
        [theme.breakpoints.down(1100)]: {
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"

        },
        marginTop: "2vw"
    },
    artistPhoto: {
        width: "20vw",
        height: "28.8vw",
        [theme.breakpoints.down(1100)]: {
            width: "40vw",
            height: "57.6vw",
            margin: "10vw auto 1vw auto"
        },
        [`${theme.breakpoints.down(1100)} and (orientation: landscape)`]: {
            width: "18vw",
            height: "25.92vw",
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexShrink: 0,
        boxShadow: `2px 2px 10px ${theme.palette.background.dark}`,
        borderRadius: "10px",
        margin: "10px"
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
    artistPhotoName: {
        maxWidth: "100%",
        fontWeight: "600"
    },
    artistDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "80%",
        margin: "50px",
        [theme.breakpoints.down(1100)]: {
            width: "90%",
            textAlign: "center",
            margin: 0,
            marginTop: '3vw',
            alignItems: "center"

        },
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            left: "100%",
            bottom: "10%",
            textAlign: "left",
            width: "80%",
            margin: "50px",
        },
    },
    artistName: {
        color: theme.palette.secondary.contrastText,
        fontSize: "min(6vw, 2.125rem)",
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(4vw, 1.5rem)",
            lineHeight: "min(4vw, 1.5rem)",
        },
    },
    artistSubtitle: {
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
    collapseButton: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        padding: "5px 0",
        WebkitUserSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            cursor: "pointer",
        }
    },
    artistInfo: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        flexShrink: 0,
        borderRadius: "20px",
        width: "20vw",
        margin: "10px",
        padding: "1vw 2vw 0.5vw 1.5vw",
        boxShadow: `2px 2px 20px ${theme.palette.background.dark}`,
        [theme.breakpoints.down(1100)]: {
            width: "100%",
            textAlign: "left",
            margin: '20px 0',
            alignItems: "flex-start",
            paddingLeft: "5vw",
            borderRadius: 0,
            boxShadow: `0 2px 10px ${theme.palette.background.default} inset`
        },
    },
    heading: {
        marginBottom: "2vw",
        paddingTop: "1vw",
        [theme.breakpoints.down(1100)]: {
            paddingTop: "3vw"
        },
    },
    artistBio: {
        fontSize: "min(3.4vw, 1rem)",
        lineHeight: 1.3,
        display: "inline-block",
        overflow: "hidden",
        width: "100%",
        paddingBottom: "1vw",
        color: theme.palette.primary.contrastText,
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            fontSize: "min(1.7vw, 1rem)",
            lineHeight: "min(3vw, 1rem)",
        },
    },
}));