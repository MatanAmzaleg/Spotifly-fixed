import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PlayPause } from "./PlayPause";
import { setActiveSong, playPause } from "../redux/actions/songs.actions";
import { useEffect, useState } from "react";
import { HiTrash } from "react-icons/hi";

export const PlaylistCard = ({playlist, handleRemovePlaylist}) => {
  console.log("playlistttttttttttttttt",playlist);
  return (
    <Link to={`/my-playlists/${playlist.id}`}>
        <section className="playlist-card-sec flex column">
      <div className="inside-card relative grid-center" >
        <img src={playlist?.songs[0]?.images?.coverart} alt="" />
      </div>
      <div className="desc flex column align-center justify-center relative">
        <h1 className="song-title">
          {playlist.title}
        </h1>
        <HiTrash className="trash-icon" onClick={(event)=> {handleRemovePlaylist(event, playlist.id)}}></HiTrash>
      </div>
    </section>
    </Link>
  );
};
