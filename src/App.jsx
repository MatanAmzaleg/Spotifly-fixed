import { useSelector } from 'react-redux';
import "./assets/styles/scss/main.scss";
import { Route, Routes } from 'react-router-dom';
import {Searchbar} from "./components/Searchbar";
import {Sidebar} from "./components/Sidebar";
import {MusicPlayer} from "./components/MusicPlayer";
import {TopPlay} from "./components/TopPlay";
import {ArtistDetails} from "./pages/ArtistDetails";
import {TopArtists} from "./pages/TopArtists";
import {AroundYou} from "./pages/AroundYou";
import {Discover} from "./pages/Discover";
import {Search} from "./pages/Search";
import {SongDetails} from "./pages/SongDetails";
import {TopCharts} from "./pages/TopCharts";
import { MyPlaylists } from './pages/MyPlaylists';
import { useState } from 'react';
import { MyPlaylistsModal } from "./pages/MyPlaylistsModal";
import { PlaylistDetails } from './pages/PlayListDetails';

const App = () => {

  const { activeSong, currentSongs } = useSelector(state => state.songModule);
  const [showModal, setShowModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState()
  const myPlaylists = useSelector(state => state.playlistModule)
  console.log(myPlaylists);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#a9cfe3]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-64px)] mt-20 pt-10 overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/"  element={<Discover setShowModal={setShowModal} setSelectedSong={setSelectedSong} />} />
              <Route path="/top-artists" element={<TopArtists  />} />
              <Route path="/top-charts" element={<TopCharts setShowModal={setShowModal} setSelectedSong={setSelectedSong} />} />
              <Route path="/around-you" element={<AroundYou setShowModal={setShowModal} setSelectedSong={setSelectedSong}/>} />
              <Route path="/artists/:id/:name" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/my-playlists" element={<MyPlaylists />} />
              <Route path="/my-playlists/:id" element={<PlaylistDetails />} />
            </Routes>
          </div>
          <div className="top-charts-root xl:sticky relative top-0 h-fit">
            <TopPlay currentSongs={currentSongs}/>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#101018] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
      {showModal ? <MyPlaylistsModal setShowModal={setShowModal} selectedSong={selectedSong}></MyPlaylistsModal> : null}
    </div>
  );
};

export default App;
