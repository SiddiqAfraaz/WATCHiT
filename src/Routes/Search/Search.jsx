import React, { useState, useEffect } from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Typography } from "@material-ui/core";

import { GetMovieSearch, GetPeopleSearch } from "../../api/MovieDB";


import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import MovieGrid from "../../Components/GeneralComponents/MovieGrid/MovieGrid";

import useStyles from "./styles";

function Search({ query }) {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [moviePage, setMoviePage] = useState(1);
    const [artistPage, setArtistPage] = useState(1);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        window.setLoading(true);
    }, []);

    useEffect(() => {
        async function getSearches() {
            const fetchedMovies = await GetMovieSearch(query, moviePage);
            setMovies(prevState => [...prevState, ...fetchedMovies]);
            window.setLoading(false);
        }
        getSearches();
    }, [query, moviePage]);

    function handleMoviesOnEnd() {
        setMoviePage((prevVal) => prevVal + 1);
    };

    useEffect(() => {
        async function getSearches() {
            const fetchedPeople = await GetPeopleSearch(query, artistPage);
            setArtists(prevState => [...prevState, ...fetchedPeople]);
        }
        getSearches();
    }, [query, artistPage]);

    function handleArtistonEnd() {
        setArtistPage((prevVal) => prevVal + 1);
    };

    useBottomScrollListener(handleMoviesOnEnd, { offset: 200 });
    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant="h5" color="textPrimary">
                {`${(artists.length === 0 && movies.length === 0) ? "No Results Found for" : "Search Results for"} '${query}'`}
            </Typography>
            {artists.length > 0 && <PeopleList name="Artists" people={artists} onEnd={handleArtistonEnd} />}
            {movies.length > 0 && <MovieGrid name="Movies" movies={movies} isSorted={true} />}
        </div>
    );
}

export default Search;