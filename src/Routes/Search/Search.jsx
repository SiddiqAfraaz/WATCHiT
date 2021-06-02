import React, { useState, useEffect, useCallback, useRef } from "react";
import { Typography, CircularProgress } from "@material-ui/core";

import { GetMovieSearch, GetPeopleSearch } from "../../api/MovieDB";


import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import MovieGrid from "../../Components/GeneralComponents/MovieGrid/MovieGrid";

import useStyles from "./styles";

function Search({ query }) {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [moviePage, setMoviePage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.setLoading(true);
    }, []);

    useEffect(() => {
        async function getSearches() {
            setLoading(true);
            const fetchedMovies = await GetMovieSearch(query, moviePage);
            setMovies(prevState => [...prevState, ...fetchedMovies]);
            setHasMore(fetchedMovies.length > 0);
            setLoading(false);
        }
        getSearches();
    }, [query, moviePage]);

    const observer = useRef()
    const lastMovieElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setMoviePage(prevMoviePage => prevMoviePage + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore]);

    const [artistPage, setArtistPage] = useState(1);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function getSearches() {
            const fetchedPeople = await GetPeopleSearch(query, artistPage);
            setArtists(prevState => [...prevState, ...fetchedPeople]);
            window.setLoading(false);
        }
        getSearches();
    }, [query, artistPage]);

    function handleArtistonEnd() {
        setArtistPage((prevVal) => prevVal + 1);
    };


    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant="h5" color="textPrimary">
                {`${(artists.length === 0 && movies.length === 0) ? "No Results Found for" : "Search Results for"} '${query}'`}
            </Typography>
            {artists.length > 0 && <PeopleList name="Artists" people={artists} onEnd={handleArtistonEnd} />}
            {movies.length > 0 && <MovieGrid ref={lastMovieElementRef} name="Movies" movies={movies} isSorted={true} />}
            <div style={{ width: "100%", display: loading ? "flex" : "none", flexDirection: "column", alignItems: "center" }}>
                <CircularProgress aria-label="progressCircle" />
            </div>
        </div>
    );
}

export default Search;