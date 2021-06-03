import React, { useState } from 'react';
import { CssBaseline } from "@material-ui/core";
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import Loading from "./Components/GeneralComponents/LoadOverlay/LoadOverlay";
import AppBar from "./Components/GeneralComponents/AppBar/Appbar";
import Footer from "./Components/GeneralComponents/Footer/Footer";
import Home from "./Routes/Home/Home";
import Movies from "./Routes/Movies/Movie";
import Search from "./Routes/Search/Search";
import Artist from "./Routes/Artist/Artist";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function App() {
    let query = useQuery();
    const [isloading, setIsLoading] = useState(true);
    window.setLoading = setIsLoading;
    return (
        <div>
            <Loading loading={isloading} />

            <CssBaseline />
            <AppBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/movies/:id">
                    <Movies />
                </Route>
                <Route path="/artist/:id">
                    <Artist />
                </Route>
                <Search query={query.get("query")} year={query.get("year")} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;