import React from "react";
import { Typography, ButtonBase, Tooltip } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import { useHistory } from "react-router-dom";

import "swiper/swiper.min.css";
import useStyles from "./styles";

export default function Movie({ name, movies, onEnd }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            {name && <Typography
                variant="h6"
                color="inherit"
                className={classes.heading}>
                {name}
            </Typography>}
            <Swiper
                freeMode={true}
                slidesPerView={'auto'}
                spaceBetween={0}
                freeModeSticky={true}
                onReachEnd={onEnd}>
                {movies && movies.map((movie, index) => {
                    const isPosterAvail = movie.poster_path !== null;
                    return (
                        <SwiperSlide key={index} className={classes.slide}>
                            <Tooltip title={movie.name || movie.title} placement="bottom" arrow>
                                <ButtonBase
                                    className={classes.card}
                                    style={{ backgroundImage: isPosterAvail && "url(https://image.tmdb.org/t/p/w342" + movie.poster_path + ")" }}
                                    onClick={() => { history.push(`/movies/${movie.id}`) }}>
                                    {!isPosterAvail &&
                                        <div className={classes.brokenImage}>
                                            <BrokenImageIcon className={classes.imageIcon} />
                                            <Typography variant="overline" className={classes.movieName}>{movie.name || movie.title}</Typography>
                                        </div>
                                    }
                                </ButtonBase>
                            </Tooltip>
                        </SwiperSlide>

                    )
                })}

            </Swiper>
        </div >
    );
}