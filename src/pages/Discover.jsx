import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { genres } from "../assets/constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import {RiCloseLine} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi'




export const Discover = ({setShowModal, setSelectedSong}) => {

  const dispacth = useDispatch();
  const { activeSong, isPlaying, currentSongs} = useSelector((state) => state.songModule);

  console.log(currentSongs);

  useEffect(() => {
    dispacth(loadSongs());
  }, []);

  const handleGengreChange = (e)=>{
    console.log('ok');
    dispacth(loadSongs(e.target.value));
  }


  return (
    <section className="discover-sec flex align-center column">
      <h2 className="main-title">Discover</h2>
      <select onChange={() => {handleGengreChange(event)}} className="genre-select" name="genres" id="">
        {genres.map((genre) => {
          return (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          );
        })}
      </select>

      <section className="songs-sec">
        {currentSongs.map((song, i) => {
          if(song.images && song.hub.actions){
            return <SongCard setSelectedSong={setSelectedSong} setShowModal={setShowModal} key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={currentSongs}></SongCard>;
          }else return null
        })}
      </section>
    </section>
  );
};
