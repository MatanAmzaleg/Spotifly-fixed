import { useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/actions/songs.actions";

import "swiper/css";
import "swiper/css/free-mode";

export const TopPlay = () => {
  const dispatch = useDispatch();
  const divRef = useRef(null);
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.songModule
  );

  useEffect(() => {
    divRef.current.scrollIntoView({ brhavior: "smooth" });
  });

  const topPlays = currentSongs?.slice(0, 5);
  console.log(topPlays);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <section className="top-play-sec flex column" ref={divRef}>
      <div className="top-charts">
        <div className="title flex align-center space-between">
          <h1 className="main-title">Top Charts</h1>
          <Link to={"/top-charts"}>See more...</Link>
        </div>
        {topPlays?.map((song, i) => (
          <TopChartCard key={song.key} song={song} i={i}></TopChartCard>
        ))}
      </div>
      <div className="top-artists">
        <div className="title flex align-center space-between">
          <h1 className="main-title">Top Artists</h1>
          <Link to={"/top-charts"}>See more...</Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className=""
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide key={song?.key} className="swiper-slide">
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} alt="name" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TopChartCard = ({ song, i }) => (
  <section className="top-chart-card flex align-center">
    <h3 className="number">{i + 1}.</h3>
    <div className="song-details flex align-center">
      <img className="song-img" src={song?.images?.coverart} alt="" />
      <div className="flex column">
        <Link to={`/songs/${song.key}`}>
          <h1 className="song-title">{song?.title}</h1>
        </Link>
        <Link className="song-subtitle" to={`/artists/${song?.artists[0].adamid}`}>
          <p className="song-subtitle">{song.subtitle}</p>
        </Link>
      </div>
    </div>
  </section>
);
