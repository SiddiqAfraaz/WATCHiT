import React from "react";

import useStyles from "./styles";

function JumbotronBG({ img, noBlur, height }) {
    const classes = useStyles({ bg: img, gradientPercent: noBlur ? ["50%", "70%"] : ["", ""] });
    return <div className={classes.bg} style={{ filter: !noBlur && "blur(3px)", height: height && height + "vw" }} />
}

export default JumbotronBG;