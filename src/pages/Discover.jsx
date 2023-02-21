import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { genres } from "../assets/constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadSongs } from "../redux/actions/songs.actions";
import {RiCloseLine, RiH1} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi'
import loaderGif from "../assets/loader.gif";

export const Discover = ({setShowModal, setSelectedSong}) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, currentSongs } = useSelector((state) => state.songModule);

  const [loading, setLoading] = useState(true); // Add a state variable to keep track of loading status

  useEffect(() => {
    dispatch(loadSongs()).then(() => {
      setLoading(false); // Set loading to false after the dispatch completes
    });
  }, []);

  const handleGengreChange = (e) => {
    setLoading(true); // Set loading to true before the dispatch starts
    dispatch(loadSongs(e.target.value)).then(() => {
      setLoading(false); // Set loading to false after the dispatch completes
    });
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
        {loading ? ( 
          <img className="loader"  src={loaderGif} alt="" />
        ) : (
          currentSongs.map((song, i) => {
            if(song.images && song.hub.actions){
              return <SongCard setSelectedSong={setSelectedSong} setShowModal={setShowModal} key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={currentSongs}></SongCard>;
            } else {
              return null;
            }
          })
        )}
      </section>
    </section>
  );
};
