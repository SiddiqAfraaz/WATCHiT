import React, { useState } from "react";
import { InputBase, InputAdornment, IconButton, useMediaQuery } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import MovieIcon from '@material-ui/icons/Theaters';

import useStyles from "./styles";

function SearchBar(props) {
    const classes = useStyles();
    const [isSearch, setSearch] = useState(false);
    const [suggestCursor, setSuggestCursor] = useState(-1);
    const [hoverCursor, setHoverCursor] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const smallScreenTrigger = useMediaQuery('(max-width:600px)');
    const searchStyle = smallScreenTrigger ? { width: "100%" } : { width: "30vw" };
    const activeStyle = { backgroundColor: "rgb(255,255,255, 0.1)" }
    const hoverStyle = { backgroundColor: "rgb(255,255,255, 0.07)" }

    function handleSearch() {
        smallScreenTrigger && setSearch((prevVal) => !prevVal);
        smallScreenTrigger && props.onSmallSearch();
        props.onClear();
    }

    return (
        (isSearch || !smallScreenTrigger) ? (
            <div className={classes.search}>
                <div className={classes.searchBar} style={searchStyle} onMouseLeave={() => setHoverCursor(null)}>
                    {isFocus && <div className={classes.BG} />}
                    <InputBase
                        className={classes.searchField}
                        placeholder="Search..."
                        autoFocus={smallScreenTrigger}
                        onBlur={(smallScreenTrigger && props.value === "") ? handleSearch : () => { setIsFocus(false) }}
                        onChange={props.onChange}
                        onFocus={() => { setIsFocus(true) }}
                        value={props.value}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowUp' && suggestCursor > -1)
                                setSuggestCursor((prevVal) => prevVal - 1);
                            if (e.key === 'ArrowDown' && suggestCursor < props.suggestions.length - 1)
                                setSuggestCursor((prevVal) => prevVal + 1);
                            if (e.key === 'Enter' && props.value !== "")
                                props.onSubmit(suggestCursor !== -1 && props.suggestions[suggestCursor]);
                        }}
                        startAdornment={
                            <InputAdornment position="start">
                                {(!isFocus) && <SearchIcon className={classes.icon} aria-label="searchIcon" />}
                            </InputAdornment>}
                        endAdornment={
                            <InputAdornment position="end">
                                {(props.value !== "") &&
                                    (<IconButton
                                        className={classes.icon}
                                        aria-label="cancelIcon"
                                        onClick={handleSearch}>
                                        <CloseIcon />
                                    </IconButton>)}
                            </InputAdornment>}
                    />
                    {(props.value !== "" && isFocus) && <div
                        className={classes.suggestion}
                        style={suggestCursor === -1 ? activeStyle : hoverCursor === -1 ? hoverStyle : null}
                        onMouseOver={() => {
                            setIsFocus(true);
                            setHoverCursor(-1)
                        }}
                        onMouseDown={props.onSubmit}>
                        <SearchIcon className={classes.icon} style={{ opacity: 0.6 }} /> <em className={classes.suggestionText} style={{ opacity: 0.6 }}>{`Search '${props.value}'`}</em>
                    </div>}
                    {isFocus && props.suggestions.map((suggestion, index) => {
                        if (suggestion.mediaType === "movie")
                            return <div
                                className={classes.suggestion}
                                style={suggestCursor === index ? activeStyle : hoverCursor === index ? hoverStyle : null}
                                onMouseOver={() => {
                                    setIsFocus(true);
                                    setHoverCursor(index)
                                }}
                                onMouseDown={() => { props.onSubmit(suggestion) }}>
                                <MovieIcon /> <p className={classes.suggestionText}>{suggestion.name} ({suggestion.releaseYear})</p>
                            </div>
                        else
                            return <div
                                className={classes.suggestion}
                                style={suggestCursor === index ? activeStyle : hoverCursor === index ? hoverStyle : null}
                                onMouseOver={() => {
                                    setIsFocus(true);
                                    setHoverCursor(index)
                                }}
                                onMouseDown={() => { props.onSubmit(suggestion) }}>
                                <PersonIcon /> <p className={classes.suggestionText} >{suggestion.name}</p>
                            </div>
                    })}
                </div>
            </div>)
            : (<IconButton
                className={classes.icon}
                aria-label="searchIcon"
                style={{ fontSize: "1.8rem", position: "absolute", right: "5px" }}
                onClick={handleSearch}>
                <SearchIcon />
            </IconButton>)
    );
}

export default SearchBar;