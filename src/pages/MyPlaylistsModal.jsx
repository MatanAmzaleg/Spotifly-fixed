import { HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { PlaylistCard } from "../components/PlaylistCard";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../redux/actions/playlist.actions";

export const MyPlaylistsModal = ({
  setShowModal,
  selectedSong
}) => {

    const dispacth = useDispatch()
    console.log(selectedSong);
  const handleClose = () => {
    setShowModal(false); // call setShowModal with false
  };

  const onAddSongToPlaylist = (playlistId) => {
    console.log(playlistId, selectedSong);
    dispacth(addSongToPlaylist(playlistId, selectedSong))
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
              return <PlaylistCard key={playlist.id} playlist={playlist} onAddSongToPlaylist={onAddSongToPlaylist}></PlaylistCard>
            }
          )}
        </section>
      </div>
    </section>
  );
};
