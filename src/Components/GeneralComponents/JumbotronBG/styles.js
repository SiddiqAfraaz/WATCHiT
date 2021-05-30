import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    bg: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        zIndex: -1,

        display: "block",
        backgroundImage: (props) => `linear-gradient(${theme.palette.background.default}, transparent ${props.gradientPercent[0]}), linear-gradient(to right, ${theme.palette.background.default}, transparent ${props.gradientPercent[1]}), url(${props.bg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        width: "100%",
        height: '100%',
        [theme.breakpoints.down(1100)]: {
            backgroundImage: (props) => `linear-gradient(to bottom, ${theme.palette.background.default}, transparent ${props.gradientPercent[0]}), linear-gradient(to top, ${theme.palette.background.default} 10%, transparent ${props.gradientPercent[1]}), url(${props.bg})`,
        },
    }
}));