import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader } from "../components/DetailsHeader";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { RelatedSongs } from "../components/RelatedSongs";
import {
  getLyrics,
  fetchRelatedSongs,
  setActiveSong,
  playPause
} from "../redux/actions/songs.actions";
import { useEffect, useState } from "react";
import { SongCardPlaylist } from "../components/SongCardPlaylist";
import { removeSong } from "../redux/actions/playlist.actions";

export const PlaylistDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams();
  const myPlaylists = useSelector((state) => state.playlistModule.myPlaylists);
  const [currentPlaylist, setCurrentPlaylist] = useState()
  console.log(myPlaylists);
  const { activeSong, isPlaying, currentSongs} = useSelector((state) => state.songModule);

  useEffect(() =>{
    const playlist = myPlaylists.find(playlist => playlist.id === id)
    setCurrentPlaylist(playlist);
  },[])


  const handleDeleteSong = (songId) => {
    const songIdx = currentPlaylist.songs.findIndex(song => song._id === songId);
    console.log(currentPlaylist);
    let newPlaylist = {...currentPlaylist}
    console.log(newPlaylist);
     newPlaylist.songs.splice(songIdx, 1);
    console.log(newPlaylist);
    dispatch(removeSong({...newPlaylist}))
  }

   return (
    <section className="playlist-details-sec flex align-center column">
      <h2 className="main-title">{currentPlaylist?.title}:</h2>
      <section className="songs-sec">
        {currentPlaylist?.songs.map((song, i) => {
          if(song.images && song.hub.actions){
            return <SongCardPlaylist handleDeleteSong={handleDeleteSong}  key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={currentPlaylist?.songs}></SongCardPlaylist>;
          }else return null
        })}
      </section>
    </section>
  );
};
