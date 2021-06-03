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
    searchBar: {
        border: `1px solid #4e4e4e`,
        borderRadius: "25px",
        position: "relative",
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        overflow: "hidden",
    },
    BG: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        zIndex: -1,
        display: "block",
        background: "rgb(0, 0, 0, 0.6)",
        backgroundPosition: "top",
        backgroundSize: "cover",
        width: "100%",
        height: '100%',
        backdropFilter: "blur(5px)"
    },
    searchField: {
        padding: "8px 0 8px 15px",
        background: "rgb(0, 0, 0, 0.2)",
    },
    icon: {
        color: theme.palette.secondary.main,
    },
    suggestion: {
        width: "100%",
        padding: "0 10px",
        borderTop: `1px solid #4e4e4e`,
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    suggestionText: {
        width: "100%",
        fontSize: "1.2rem",
        margin: "5px 3px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: theme.palette.secondary.contrastText,
    }
}));