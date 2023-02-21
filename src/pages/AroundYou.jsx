import React, { useEffect } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import { useSelector, useDispatch } from "react-redux";
import { SongCard } from "../components/SongCard";

export const AroundYou = ({ setShowModal, setSelectedSong }) => {
  const { activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.songModule
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs("AROUND_YOU"));
  }, []);

  return (
    <section className="around-you-sec flex align-center column">
      <h1 className="around-title">Around you:</h1>
      <section className="songs-sec">
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
      </section>
    </section>
  );
};
