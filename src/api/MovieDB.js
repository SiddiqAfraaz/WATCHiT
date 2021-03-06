import axios from "axios";

let userRegionCode = "IN";

const genres = [{
        "id": 10751,
        "name": "Family",
    },
    {
        "id": 28,
        "name": "Action",
    },
    {
        "id": 10749,
        "name": "Romance",
        "listName": "Romantic Movies"
    },
    {
        "id": 80,
        "name": "Crime",
    },
    {
        "id": 27,
        "name": "Horror",
    },
    {
        "id": 12,
        "name": "Adventure",
    },
    {
        "id": 35,
        "name": "Comedy",
        "listName": "Comedies"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 99,
        "name": "Documentary",
        "listName": "Documentries"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History",
        "listName": "Historical Movies"
    },
    {
        "id": 10402,
        "name": "Music",
        "listName": "Musical"
    },
    {
        "id": 9648,
        "name": "Mystery",
        "listName": "Mysteries"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie",
        "listName": "TV Movies"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];
const curatedLists = [{
        filters: `&certification_country=US&certification=PG`,
        name: "Family Movie Night Collections",
    },
    {
        filters: "&with_genres=28%2C12",
        name: "World of Action",
    },
    {
        filters: "&with_genres=35%2C10749&without_genres=16",
        name: "Live, Love, Laugh",
    },
    {
        filters: "&with_genres=53%2C80",
        name: "Partner in Crime",
    },
    {
        filters: "&with_genres=27%2C9648",
        name: "Mysteries of Horror",
    },
    {
        filters: "&with_genres=878%2C53",
        name: "Chills from the Future!"
    },
    {
        filters: "&with_genres=12",
        name: "Don't miss on Adventure",
    },
    {
        filters: "&with_genres=35",
        name: "Comedies",
    },
    {
        filters: "&with_genres=16",
        name: "Animation Movies"
    },
    {
        filters: "&with_genres=99",
        name: "Documentaries",
    },
    {
        filters: "&with_genres=18",
        name: "Life as a Drama"
    },
    {
        filters: "&with_genres=14",
        name: "Fantasy Movies"
    },
    {
        filters: "&with_genres=36",
        name: "Historical Movies"
    },
    {
        filters: "&with_genres=10402",
        name: "Musical"
    },
    {
        filters: "&with_genres=9648",
        name: "Mysteries"
    },
    {
        filters: "&with_genres=878",
        name: "Sci-Fi Movies"
    },
    {
        filters: "&with_genres=53",
        name: "Thriller Movies"
    },
    {
        filters: "&with_genres=10752",
        name: "War & Destrucution"
    },
]; // Add in Even Length

function setGenres(genreIDs) {
    return genreIDs.map((genreID) =>
        (genres.filter((genre) => genre["id"] === genreID))[0]["name"]
    )
}

//HomePage API Calls
export async function GetCuratedList(listNum) {
    if (window.sessionStorage.getItem("lists") === null) {
        window.sessionStorage.setItem("lists", JSON.stringify([]));
    }
    const listIndexes = JSON.parse(window.sessionStorage.getItem("lists"));
    if (listNum > curatedLists.length)
        return null
    const indexLength = listIndexes.length;
    if (indexLength <= listNum - 1) {
        while (listIndexes.length < indexLength + 2) {
            let i = Math.floor(Math.random() * curatedLists.length);
            let p = Math.floor(Math.random() * 5) + 1;
            if (listIndexes.find((el) => el.index === i) === undefined) listIndexes.push({ index: i, page: p });
        }
    }
    try {
        let [{ data: { results: list1 } }, { data: { results: list2 } }] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${curatedLists[listIndexes[listNum - 2].index].filters}&watch_region=IN&with_watch_monetization_types=flatrate&page=${listIndexes[listNum - 2].page}`),
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${curatedLists[listIndexes[listNum - 1].index].filters}&watch_region=IN&with_watch_monetization_types=flatrate&page=${listIndexes[listNum - 1].page}`)
        ]);
        list1 = list1.filter((result) => (result.poster_path));
        list1.sort(function(a, b) { return b.popularity - a.popularity });
        list2 = list2.filter((result) => (result.poster_path));
        list2.sort(function(a, b) { return b.popularity - a.popularity });
        window.sessionStorage.setItem("lists", JSON.stringify(listIndexes));
        return [{ listName: curatedLists[listIndexes[listNum - 2].index].name, listMovies: list1 }, { listName: curatedLists[listIndexes[listNum - 1].index].name, listMovies: list2 }];
    } catch (error) {
        return null;
    }
}
export async function GetTrending(page = 1) {
    try {
        let [{ data: { results } }, { data: languageCodes }] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`),
            axios.get("https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json")
        ]);
        results = results.slice(0, 8);
        for (const result of results) {
            result["genres"] = setGenres(result["genre_ids"]);
            if (result.release_date !== null) result.release_date = new Date(result.release_date);
            result.language = languageCodes.find((code) => code.alpha2 === result.original_language).English;
        }
        results = results.filter((result) => (result.poster_path));
        return results;
    } catch (error) {
        return error;
    }
}
export async function GetPopular(page = 1) {
    try {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}&region=IN`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetNowPlaying() {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setMonth(endDate.getMonth() - 1);
    try {
        let { data: { results } } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&region=${userRegionCode}%2CUS&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${startDate.toISOString().slice(0,10)}&release_date.lte=${endDate.toISOString().slice(0,10)}&watch_region=${userRegionCode}&with_watch_monetization_types=flatrate`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetTrendingPeople() {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        return results;
    } catch (error) {
        return error.response.status
    }
}

//MoviePage API Calls
export async function GetMovie(movieID) {
    try {
        const [{ data }, { data: languageCodes }] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=null&append_to_response=watch%2Fproviders%2Ccredits%2Creleases%2Cimages`),
            axios.get("https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json")
        ]);
        data.language = languageCodes.find((code) => code.alpha2 === data.original_language).English;
        data.watch_providers = data['watch/providers'].results[`${userRegionCode}`];
        data.release_date = new Date(data.release_date);
        let temp = data.releases.countries.filter((rate) => rate.iso_3166_1 === userRegionCode || rate.iso_3166_1 === "US")[0];
        if (typeof temp === 'undefined' && data.releases.countries.length > 0) {
            data.content_rating = data.releases.countries[0].certification;
        } else if (typeof temp !== 'undefined') {
            data.content_rating = temp.certification;
        } else {
            data.content_rating = null;
        }
        return data;
    } catch (error) {
        return error;
    }
}
export async function GetSimilar(movieID) {
    try {
        const [{ data: { results: recommend } }, { data: { results: similar } }] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`),
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`),
        ]);
        recommend.push.apply(recommend, similar)
        return recommend;
    } catch (error) {
        return error.response.status
    }
}

//ArtistPage API Calls
export async function GetPeople(peopleID) {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${peopleID}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=movie_credits`);
        data.movies = data.movie_credits.cast;
        data.movies = data.movies.filter((movie) => {
            if (movie.character)
                return !movie.character.includes("Special Appearance")
            else
                return true
        });
        let depts = data.movie_credits.crew.map((movie) => movie.department);
        data.depts = [...new Set(depts)];
        return data;
    } catch (error) {
        return error.response.status;
    }
}
export async function GetPopularPeople() {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`);
        return results;
    } catch (error) {
        return error.response.status
    }
}

//SearchPage API Calls
export async function GetMovieSearch(query, year, page = 1) {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&year=${year}&page=${page}&include_adult=false`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetPeopleSearch(query, page = 1) {
    try {
        const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false&region=${userRegionCode}`);
        return results;
    } catch (error) {
        return error.response.status
    }
}
export async function GetSearchSuggestions(query) {
    try {
        let { data: { results } } = await axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/multi?&language=en-US&&&',
            params: { api_key: process.env.REACT_APP_TMDB_API_KEY, language: "en-US", query: query, include_adult: "false", region: userRegionCode },
        });
        results = results.filter((result) => (result.media_type === "movie" || result.media_type === "person"));
        results = results.map((result) => {
            return { name: (result.name || result.title), releaseYear: (result.release_date && result.release_date.slice(0, 4)), mediaType: result.media_type }
        })
        return results;
    } catch (e) {
        return e;
    }
}