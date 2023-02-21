import { useSelector } from "react-redux";
import { PlaylistCard } from "../components/PlaylistCard";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../redux/actions/playlist.actions";
import { removePlaylist } from "../redux/actions/playlist.actions";


export const MyPlaylists = () => {
  const dispatch = useDispatch()
  const playlists = useSelector((state) => state.playlistModule.myPlaylists);
  console.log(playlists);

  const handleCreatePlaylist = () => {
    const playlistName = prompt('Enter a playlist name')
    dispatch(createPlaylist(playlistName))
    console.log(playlistName);
  }

  const handleRemovePlaylist = (e, playlistId) => {
    console.log(e, playlistId);
    e.stopPropagation()
    e.preventDefault();
    dispatch(removePlaylist(playlistId))
  }

  return (
    <section className="my-playlists-sec flex align-center column">
      <h1 className="main-title">My Playlists:</h1>
      <section className="playlists-sec">
        {playlists.map((playlist) => {
          return (
            <PlaylistCard handleRemovePlaylist={handleRemovePlaylist} key={playlist.id} playlist={playlist}></PlaylistCard>    
          );
        })}
      </section>
      <h1 className="mini-title flex align-center" onClick={handleCreatePlaylist}>Create new playlist <HiPlus className="plus-icon"></HiPlus></h1>
    </section>
  );
};
