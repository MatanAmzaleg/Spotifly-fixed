import React, { useEffect } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";
import { useParams } from "react-router-dom";

export const Search = () => {

    const { activeSong, isPlaying, currentSongs } = useSelector((state) => state.songModule);
    const dispatch = useDispatch();
    const {searchTerm } = useParams()
    console.log(searchTerm);

    useEffect(() => {
      dispatch(loadSongs("SEARCH", searchTerm));
    }, [searchTerm]);

    return (
        <section className="search-sec flex align-center column">
            <h1 className="main-title">Results for <span>{searchTerm}</span>:</h1>
            <div className="songs-sec">
            {currentSongs.map((song, i) => {
          if (song.images && song.hub.actions) {
            return (
              <SongCard
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={currentSongs}
              ></SongCard>
            );
          } else return null;
        })}
            </div>
        </section>
    )
}


