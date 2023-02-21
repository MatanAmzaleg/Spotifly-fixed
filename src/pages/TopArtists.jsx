import React, { useEffect, useState } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";
import {ArtistCard} from "../components/ArtistCard";
import loaderGif from "../assets/loader.gif";

export const TopArtists = () => {
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.songModule
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(loadSongs("TOP_CHARTS")).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section className="top-charts-sec flex align-center column">
      <h1 className="main-title">Top Artists:</h1>
      <div className="songs-sec">
        {loading ? (
          <img className="loader"  src={loaderGif} alt="" />
        ) : (
          currentSongs.map((track, i) => {
            if (track) {
              return (
                <ArtistCard key={track.key} track={track}></ArtistCard>
              );
            } else return null;
          })
        )}
      </div>
    </section>
  );
};