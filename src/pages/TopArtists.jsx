import React, { useEffect } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";
import {ArtistCard} from "../components/ArtistCard";

export const TopArtists = () => {

    const { activeSong, isPlaying, currentSongs } = useSelector((state) => state.songModule);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadSongs("TOP_CHARTS"));
    }, []);

    return (
        <section className="top-charts-sec flex align-center column">
            <h1 className="main-title">Top Artists:</h1>
            <div className="songs-sec">
            {currentSongs.map((track, i) => {
          if (track) {
            return (
              <ArtistCard
                key={track.key}
                track={track}
              ></ArtistCard>
            );
          } else return null;
        })}
            </div>
        </section>
    )
}


