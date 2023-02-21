import React, { useEffect, useState } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";
import { useParams } from "react-router-dom";
import loaderGif from "../assets/loader.gif";

export const Search = () => {
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.songModule
  );
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(loadSongs("SEARCH", searchTerm)).then(() => {
      setIsLoading(false);
    });
  }, [searchTerm, dispatch]);

  return (
    <section className="search-sec flex align-center column">
      <h1 className="main-title">
        Results for <span>{searchTerm}</span>:
      </h1>
      {isLoading ? (
        <div className="loading-container">
          <img src={loaderGif} alt="Loading..." />
        </div>
      ) : (
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
      )}
    </section>
  );
};