import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'absolute',
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: "8px",
        [theme.breakpoints.down(600)]: {
            justifyContent: "center",
            marginTop: "4px",
        }
    },
    title: {
        width: "15vw",
        height: "50px",
        [theme.breakpoints.down(600)]: {
            textAlign: "center",
            width: "35vw",
        }
    },
    icon: {
        padding: 0
    },
    carousel: {
        position: "relative",
        width: "100%",
    }

}));