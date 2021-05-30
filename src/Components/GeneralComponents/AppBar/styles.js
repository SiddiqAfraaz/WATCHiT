import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'absolute',
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down(600)]: {
            justifyContent: "center",
        }
    },
    title: {
        width: "15vw",
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