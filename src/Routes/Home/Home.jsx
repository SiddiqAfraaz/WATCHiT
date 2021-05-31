import React, { useState, useEffect } from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { CircularProgress } from '@material-ui/core';

import Carousel from "../../Components/HomeComponents/Carousel/Carousel";
import MovieList from "../../Components/GeneralComponents/MovieList/MovieList";
import PeopleList from "../../Components/GeneralComponents/PeopleList/PeopleList";
import { GetPopular, GetNowPlaying, GetTrending, GetCuratedList, GetTrendingPeople } from "../../api/MovieDB";


function Home() {
    const [lists, setLists] = useState([{
        listName: '',
        listMovies: []
    }]);
    const [curatedLists, setCuratedLists] = useState([]);
    const [curatedListNum, setcuratedListNum] = useState(1);
    const [isPageEnd, setIsPageEnd] = useState(false);
    const [popularPeople, setPopularPeople] = useState([]);
    const [carouselMovies, setCarouselMovies] = useState([]);

    useEffect(() => {
        window.setLoading(true);
        async function setHomepageLists() {
            const [nowPlaying, popular, trending, people] = await Promise.all([
                GetNowPlaying(),
                GetPopular(),
                GetTrending(),
                GetTrendingPeople(),
            ]);
            setCarouselMovies(trending.slice(0, 8));
            setPopularPeople(people);
            setLists([
                {
                    listName: "What's Popular",
                    listMovies: popular
                },
                {
                    listName: "Now Playing",
                    listMovies: nowPlaying
                },
            ]);

            window.setLoading(false);
        }
        setHomepageLists();
    }, []);

    useEffect(() => {
        async function setCurated() {
            const curated = await GetCuratedList(curatedListNum);
            if (curated === null) {
                setIsPageEnd(true);
            } else {
                setCuratedLists((prevVal) => {
                    prevVal.push(curated);
                    return prevVal;
                });
            }
        }
        setCurated();
    }, [curatedListNum]);

    function handleOnBottom() {
        if (!isPageEnd) {
            setcuratedListNum((prevVal) => prevVal + 1);
        }
    }


    useBottomScrollListener(handleOnBottom, { offset: 150 });
    return (
        <div>
            <Carousel movies={carouselMovies} />
            {lists.map((list, index) =>
                <MovieList key={index} name={list.listName} movies={list.listMovies} />)}
            <PeopleList name="Trending Artists" people={popularPeople} />
            {curatedLists.map((list, index) =>
                <MovieList key={index} name={list.listName} movies={list.listMovies} />)}
            <div style={{ width: "100%", display: isPageEnd ? "none" : "flex", flexDirection: "column", alignItems: "center" }}>
                <CircularProgress />
            </div>
        </div >
    );
}

export default Home;