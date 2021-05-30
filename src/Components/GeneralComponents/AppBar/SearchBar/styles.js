import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    search: {
        display: "flex",
        flexDirection: "row",
        background: "transparent",
        alignItems: "center",
        width: "auto",
        justifyContent: "flex-end",
        [theme.breakpoints.down(600)]: {
            width: "100%",
        }
    },
    searchField: {
        border: `1px solid #4e4e4e`,
        borderRadius: "50px",
        width: "30vw",
        paddingLeft: "15px",
        height: "50px",
        transition: "width 500ms",
    },
    icon: {
        color: theme.palette.secondary.main,
    },
}));