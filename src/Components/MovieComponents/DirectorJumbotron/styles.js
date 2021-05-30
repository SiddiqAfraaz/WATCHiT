import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => {
    return ({
        root: {
            position: "relative",
        },
        content: {
            overflow: "hidden",
            position: "relative",
        },
        heading: {
            display: "flex",
            padding: "2vw 0 5vw 1vw",
            color: theme.palette.secondary.contrastText,
            fontWeight: "600",
        },
        details: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5vw",
            [theme.breakpoints.down(1100)]: {
                flexDirection: "column",
                width: "90%",
                textAlign: "center",
                margin: "auto",
                justifyContent: "center",
            },
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                flexDirection: "row",
                width: "100%",
                height: "100%",
                alignItems: "center",
                textAlign: "left",
            },
        },
        avatar: {
            margin: "auto 80px",
            width: "18vw",
            height: "18vw",
            boxShadow: "2px 2px 10px #000",
            [theme.breakpoints.down(1100)]: {
                margin: "10px auto",
                width: "25vw",
                height: "25vw",
            },
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                margin: "auto 40px",
                width: "18vw",
                height: "18vw",
            },
            [theme.breakpoints.down(500)]: {
                margin: "10px auto",
                width: "40vw",
                height: "40vw",
            },
        },
        directorContent: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down(1100)]: {
                alignItems: "center",
            },
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                alignItems: "flex-start",
            },
        },
        name: {
            color: theme.palette.secondary.contrastText,
            fontSize: "min(6vw, 2.125rem)",
            lineHeight: "min(7vw, 1.7rem)",
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                fontSize: "min(3vw, 1.5rem)",
            },
        },
        job: {
            color: theme.palette.primary.contrastText,
            fontSize: "min(3vw, 0.8rem)",
            fontWeight: "600",
            lineHeight: "min(4vw, 1rem)",
            display: "inline-flex",
            marginTop: "1px",
            paddingBottom: "10px",
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                fontSize: "min(2vw, 0.7rem)",
                lineHeight: "min(4vw, 0.8rem)",
            },
        },
        directorText: {
            fontSize: "min(3.4vw, 1rem)",
            lineHeight: 1.3,
            width: "80%",
            color: theme.palette.secondary.contrastText,
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                fontSize: "min(1.7vw, 1rem)",
                lineHeight: "min(3vw, 1rem)",
            },
            maxWidth: '100%',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 10,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        button: {
            width: "10vw",
            margin: "10px 0",
            [theme.breakpoints.down(1100)]: {
                fontSize: "min(3vw, 1rem)",
                width: "30vw",
            },
            [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
                textAlign: "left",
                fontSize: "min(2vw, 1rem)",
                width: "20vw",
            },
        },
    })
});