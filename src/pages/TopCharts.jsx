import React, { useEffect, useState } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";
import loaderGif from "../assets/loader.gif";

export const TopCharts = ({ setShowModal, setSelectedSong }) => {
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.songModule
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(loadSongs("TOP_CHARTS")).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section className="top-charts-sec flex align-center column">
      <h1 className="main-title">Top Charts:</h1>
      {loading ? (
        <img className="loader" src={loaderGif} alt="Loading..." />
      ) : (
        <div className="songs-sec">
          {currentSongs.map((song, i) => {
            if (song.images && song.hub.actions) {
              return (
                <SongCard
                  setShowModal={setShowModal}
                  setSelectedSong={setSelectedSong}
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



