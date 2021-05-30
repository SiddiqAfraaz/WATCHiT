import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
    return ({
        root: {
            width: "100%",
            height: "10vw",
            [`${theme.breakpoints.down(1000)}`]: {
                height: "30vw",
                marginTop: "3vw"
            },
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                height: "18vw",
            },
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1vw"
        },
        icon: {
            margin: "0 4vw",
            padding: "1vw",
            opacity: "60%",
        },
        name: {
            fontSize: "min(3.5vw, 1rem)",
            lineHeight: "1rem",
            color: theme.palette.primary.contrastText,
            opacity: "40%",
        },
        subtitle: {
            color: theme.palette.primary.main,
            paddingTop: "1vw",
            fontSize: "min(2.5vw, 0.75rem)",
        }
    })
});