import { HiPlus, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { PlaylistCardAdd } from "../components/PlaylistCardAdd";
import { useDispatch } from "react-redux";
import { addSongToPlaylist, createPlaylist } from "../redux/actions/playlist.actions";


export const MyPlaylistsModal = ({
  setShowModal,
  selectedSong
}) => {

    const dispatch = useDispatch()
    console.log(selectedSong);
  const handleClose = () => {
    setShowModal(false); // call setShowModal with false
  };

  const onAddSongToPlaylist = (playlistId) => {
    console.log(playlistId, selectedSong);
    dispatch(addSongToPlaylist(playlistId, selectedSong))
    setShowModal(false)
  }

  const handleCreatePlaylist = () => {
    const playlistName = prompt('Enter a playlist name')
    dispatch(createPlaylist(playlistName))
    console.log(playlistName);
  }

  const playlists = useSelector((state) => state.playlistModule.myPlaylists);
  console.log(playlists);

  return (
    <section className="my-playlists-modal-sec grid-center">
      <div className="playlist-modal">
        <div className="title flex space-between">
          <h1 className="main-title">Chose Playlist to add your song to:</h1>
          <button className="x-btn" onClick={handleClose}>
            <HiX className="x-icon"></HiX>
          </button>
        </div>
        <section className="playlists-sec">
          {playlists.map((playlist) => {
            console.log(playlist);
              return <PlaylistCardAdd key={playlist.id} playlist={playlist} onAddSongToPlaylist={onAddSongToPlaylist}></PlaylistCardAdd>
            }
          )}
        </section>
        <h1 className="mini-title flex align-center" onClick={handleCreatePlaylist}>Create new playlist <HiPlus className="plus-icon"></HiPlus></h1>
      </div>
    </section>
  );
};
