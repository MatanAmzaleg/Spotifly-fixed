import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PlayPause } from "./PlayPause";
import { setActiveSong, playPause } from "../redux/actions/songs.actions";
import { HiTrash } from "react-icons/hi";
import { MyPlaylistsModal } from "../pages/MyPlaylistsModal";
import { useEffect, useState } from "react";

export const SongCardPlaylist = ({ song, isPlaying, activeSong, i, data, handleDeleteSong }) => {
  
  
  const dispatch = useDispatch();



  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };


  return (
    <section className="song-card-sec flex column">
      <div className="inside-card relative">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          
        />
        <img src={song.images?.coverart || song.images?.background} alt="" />
      </div>
      <div className="desc flex column align-center justify-center relative">
        <h1 className="song-title">
          <Link to={`/songs/${song.key}`}>{song.title}</Link>
        </h1>
        <p className="song-subtitle">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}/${song?.subtitle}`
                : "/top-artist"
            }
          >
            {song.subtitle}
          </Link>
        </p>
        <button className="delete-btn grid-center" onClick={() => handleDeleteSong(song._id)} title="remove from playlist"><HiTrash></HiTrash></button>
      </div>
    </section>
  );
};
