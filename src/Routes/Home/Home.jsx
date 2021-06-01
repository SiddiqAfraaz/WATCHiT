import React, { useState, useEffect, useRef, useCallback } from "react";
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

    const [curatedLists, setCuratedLists] = useState([]);
    const [listNumber, setListNumber] = useState(2);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function setCurated() {
            setLoading(true);
            GetCuratedList(listNumber).then(res => {
                if (res === null) {
                    console.log(res)
                    setHasMore(false);
                }
                else {
                    console.log(res)
                    setCuratedLists((prevVal) => {
                        return [...prevVal, ...res];
                    });
                    setHasMore(true);
                }
                setLoading(false);
            }).catch(e => {
                setHasMore(false);
            });
        }
        setCurated();
    }, [listNumber]);

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                console.log("visible")
                setListNumber(prevListNumber => prevListNumber + 2)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore]);


    return (
        <div>
            <Carousel movies={carouselMovies} />
            {lists.map((list, index) =>
                <MovieList key={index} name={list.listName} movies={list.listMovies} />)}
            <PeopleList name="Trending Artists" people={popularPeople} />
            {curatedLists.map((list, index) => {
                if (curatedLists.length === index + 1)
                    return <div ref={lastBookElementRef}><MovieList key={index} name={list.listName} movies={list.listMovies} /></div>
                else
                    return <MovieList key={index} name={list.listName} movies={list.listMovies} />
            })}
            <div style={{ width: "100%", display: loading ? "flex" : "none", flexDirection: "column", alignItems: "center" }}>
                <CircularProgress />
            </div>
        </div >
    );
}

export default Home;