import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    heading: {
        display: "flex",
        padding: "1vw 2vw 0.5vw 1.5vw",
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
    card: {
        display: "flex",
        width: "15vw",
        height: "22.5vw",
        margin: "0.5rem 0 0.5rem 1vw",
        backgroundColor: "rgb(50,50,50, 0.5)",
        borderRadius: "10px",
        boxShadow: `2px 2px 10px ${theme.palette.background.dark}`,
        [theme.breakpoints.down(1100)]: {
            width: "20vw",
            height: "30vw",
            marginLeft: "2vw",
        },
        [theme.breakpoints.down(500)]: {
            width: "40vw",
            height: "60vw",
            marginLeft: "2vw",
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 250ms",
        '&:hover': {
            transform: "translateY(-5px)",
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
}));