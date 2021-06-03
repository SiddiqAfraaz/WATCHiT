import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, ButtonBase, Tooltip, useMediaQuery } from "@material-ui/core"
import SearchBar from "./SearchBar/SearchBar";

import useStyles from "./styles";
import logo from './Watchit.svg';
import { GetSearchSuggestions } from "../../../api/MovieDB";

export default function Appbar() {
    const history = useHistory();
    const [input, setInput] = useState("");
    const [searchSuggest, setSearchSuggest] = useState([]);
    const [isSmallSearch, setisSmallSearch] = useState(false);
    const smallScreenTrigger = useMediaQuery('(max-width:600px)');
    const classes = useStyles();

    useEffect(() => {
        async function setSuggestions() {
            let suggestions = await GetSearchSuggestions(input);
            suggestions = suggestions.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);
            setSearchSuggest(suggestions.slice(0, 10));
        }
        if (input !== "") {
            setSuggestions();
        } else {
            setSearchSuggest([]);
        }
    }, [input]);
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    {(!isSmallSearch || !smallScreenTrigger) && <Tooltip title="WATCHiT™" placement="right">
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
                        onSubmit={(suggest) => { history.push(`/search?query=${suggest.name ? suggest.name : input}` + (suggest.releaseYear ? `&year=${suggest.releaseYear}` : "")) }}
                        onSmallSearch={() => setisSmallSearch((prevVal) => !prevVal)}
                        suggestions={searchSuggest}
                        value={input} />
                </Toolbar>
            </AppBar>
        </div>
    )
}