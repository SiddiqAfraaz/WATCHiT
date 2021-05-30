import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
    return ({
        main: {
            display: "flex",
            flexDirection: "row"
        },
        info: {
            width: "20vw",
            backgroundColor: "#101010",
        },
        bg: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            zIndex: -1,
            display: "block",
            backgroundImage: (props) => `${props.img}`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            width: "100%",
            height: '100%',
            filter: "blur(3px)",
            [theme.breakpoints.down(1100)]: {
                backgroundImage: (props) => `linear-gradient(to top, ${theme.palette.background.default}, transparent), linear-gradient(to bottom, ${theme.palette.background.default}, transparent 70%), ${props.bg}`,
            },
        },
    })
});