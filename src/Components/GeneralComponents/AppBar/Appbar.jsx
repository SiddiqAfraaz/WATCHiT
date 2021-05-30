import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, ButtonBase, Tooltip } from "@material-ui/core"
import SearchBar from "./SearchBar/SearchBar";

import useStyles from "./styles";
import logo from './Watchit.svg';

export default function Appbar() {
    const history = useHistory();
    const [input, setInput] = useState("");
    const [isSmallSearch, setisSmallSearch] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    {!isSmallSearch && <Tooltip title="WATCHiT™" placement="right">
                        <ButtonBase
                            className={classes.title}
                            disableRipple={true}
                            onClick={() => { history.push("/") }}>
                            <img src={logo} alt="WATCHiT"></img>
                        </ButtonBase>
                    </Tooltip>}
                    <SearchBar
                        onChange={(event) => { setInput(event.target.value); }}
                        onClear={() => { setInput("") }}
                        onSubmit={() => { history.push(`/search?query=${input}`) }}
                        onSmallSearch={() => setisSmallSearch((prevVal) => !prevVal)}
                        value={input} />
                </Toolbar>
            </AppBar>
        </div>
    )
}