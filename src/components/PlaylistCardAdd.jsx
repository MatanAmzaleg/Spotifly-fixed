import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PlayPause } from "./PlayPause";
import { setActiveSong, playPause } from "../redux/actions/songs.actions";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";

export const PlaylistCardAdd = ({playlist, onAddSongToPlaylist}) => {

  console.log(playlist);
  
  return (
    <section className="playlist-card-sec flex column">
      <div className="inside-card relative grid-center" onClick={() => {onAddSongToPlaylist(playlist.id)}}>
       <HiPlus className="plus"></HiPlus>
        <img src={playlist?.songs[0]?.images?.coverart} alt="" />
      </div>
      <div className="desc flex column align-center justify-center relative">
        <h1 className="song-title">
          {playlist.title}
        </h1>
      </div>
    </section>
  );
};
