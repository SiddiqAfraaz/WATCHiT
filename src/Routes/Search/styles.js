import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        minHeight: "78vh",
    },
    text: {
        padding: `60px 15px 20px 15px`
    },
    empty: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));