import React, { useState, useEffect } from "react";
import { GetMovieSearch, GetPeopleSearch } from "../../api/MovieDB";
import { Typography } from "@material-ui/core";

import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import MovieList from "../../Components/GeneralComponents/MovieList/MovieList";

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

    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant="h5" color="textPrimary">
                {`${(artists.length === 0 && movies.length === 0) ? "No Results Found for" : "Search Results for"} '${query}'`}
            </Typography>
            {artists.length > 0 && <PeopleList name="Artists" people={artists} onEnd={handleArtistonEnd} />}
            {movies.length > 0 && <MovieList name="Movies" movies={movies} onEnd={handleMoviesOnEnd} />}
        </div>
    );
}

export default Search;