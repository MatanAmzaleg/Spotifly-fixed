import { useSelector } from "react-redux";
import { PlaylistCard } from "../components/PlaylistCard";

export const MyPlaylists = () => {
  const playlists = useSelector((state) => state.playlistModule.myPlaylists);
  console.log(playlists);

  return (
    <section className="my-playlists-sec flex align-center column">
      <h1 className="main-title">My Playlists:</h1>
      <section className="playlists-sec">
        {playlists.map((playlist) => {
          return (
            <PlaylistCard playlist={playlist}></PlaylistCard>    
          );
        })}
      </section>
    </section>
  );
};
