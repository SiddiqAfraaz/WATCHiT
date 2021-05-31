import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    heading: {
        display: "flex",
        padding: "1vw 2vw 0 1.5vw",
        color: theme.palette.secondary.contrastText,
        fontSize: "min(4vw, 1.2rem)",
    },
    subtitle: {
        display: "flex",
        paddingLeft: "5px",
        opacity: "50%",
        color: theme.palette.secondary.contrastText,
    },
    movieList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0 10px"
    },
    cardSearch: {
        display: "flex",
        width: "15vw",
        height: "22.5vw",
        margin: "0.5vw",
        backgroundColor: "rgb(50,50,50, 0.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        boxShadow: `2px 2px 10px ${theme.palette.background.dark}`,
        transition: "transform 250ms",
        '&:hover': {
            transform: "translateY(-5px)",
        },
        [theme.breakpoints.down(1100)]: {
            width: "18vw",
            height: "27vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "29vw",
            height: "43.5vw",
            margin: "1.5vw 1vw",
        },
    },
    cardArtist: {
        display: "flex",
        width: "14vw",
        height: "21vw",
        margin: "0.5vw",
        backgroundColor: "rgb(50,50,50, 0.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        boxShadow: `2px 2px 10px ${theme.palette.background.dark}`,
        transition: "transform 250ms",
        '&:hover': {
            transform: "translateY(-5px)",
        },
        [theme.breakpoints.down(1100)]: {
            width: "18vw",
            height: "27vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "29vw",
            height: "43.5vw",
            margin: "1.5vw 1vw",
        },
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
    movieName: {
        maxWidth: "100%",
        fontWeight: "600"
    },
    gradient: {
        bottom: "0%",
        position: "absolute",
        height: "100%",
        width: "100%",
        background: `linear-gradient(to top, ${theme.palette.background.default} 5%, transparent 50%)`,
    },
    collapseButton: {
        textAlign: "center",
        color: theme.palette.secondary.main,
        paddingTop: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitUserSelect: "none",
        "&:hover": {
            cursor: "pointer",
        }
    }
}));