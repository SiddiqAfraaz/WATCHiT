import React, { useState } from "react";
import { InputBase, InputAdornment, IconButton, useMediaQuery } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from "./styles";

function SearchBar(props) {
    const classes = useStyles();
    const [isSearch, setSearch] = useState(false);
    const smallScreenTrigger = useMediaQuery('(max-width:600px)');
    const searchStyle = smallScreenTrigger ? { width: "100%", backgroundColor: "rgba(0,0,0, 0.3)" } : { width: "30vw" };

    function handleSearch() {
        setSearch((prevVal) => !prevVal);
        props.onSmallSearch();
        props.onClear();
    }

    return (
        (isSearch || !smallScreenTrigger) ? (
            <div className={classes.search} style={{ position: (smallScreenTrigger && isSearch) && "fixed" }}>
                <InputBase
                    className={classes.searchField}
                    placeholder="Search..."
                    autoFocus={smallScreenTrigger}
                    onBlur={(smallScreenTrigger && props.value === "") ? handleSearch : null}
                    onChange={props.onChange}
                    value={props.value}
                    style={searchStyle}
                    onKeyPress={(e) => { (e.key === 'Enter' && props.value !== "") && props.onSubmit(); }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                className={classes.icon}
                                onClick={props.value !== "" ? props.onSubmit : null}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>}
                />
                {(props.value !== "" && smallScreenTrigger) &&
                    (<IconButton
                        className={classes.icon}
                        onClick={handleSearch}>
                        <CloseIcon />
                    </IconButton>)}
            </div>)
            : (<IconButton
                className={classes.icon}
                style={{ fontSize: "1.8rem", position: "absolute", right: "5px" }}
                onClick={handleSearch}>
                <SearchIcon />
            </IconButton>)
    );
}

export default SearchBar;