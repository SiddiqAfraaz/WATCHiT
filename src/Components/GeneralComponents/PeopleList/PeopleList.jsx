import React from 'react';
import { Typography, Avatar, ButtonBase, Tooltip } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
function PeopleList({ name, people, onEnd }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.cast}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.heading}>
                {name}
            </Typography>
            <Swiper
                freeMode={true}
                slidesPerView={'auto'}
                spaceBetween={0}
                freeModeSticky={true}
                onReachEnd={onEnd || null}
            >
                {people && people.map((artist, index) => {
                    return (
                        <SwiperSlide key={index} className={classes.slide}>
                            <div className={classes.artist}>
                                <Tooltip title={artist.character && `Acted as ${artist.character}`} placement="top">
                                    <Avatar
                                        alt={artist.name}
                                        src={artist.profile_path && "https://image.tmdb.org/t/p/w185/" + artist.profile_path}
                                        component={ButtonBase}
                                        className={classes.castAvatar}
                                        onClick={() => { history.push(`/artist/${artist.id}`) }}
                                    />
                                </Tooltip>
                                <Typography
                                    variant="body1"
                                    className={classes.artistName}>
                                    {artist.name}
                                </Typography>
                                {artist.character && <Typography
                                    variant="body2"
                                    className={classes.artistCharacter}>
                                    {artist.character}
                                </Typography>}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default PeopleList;