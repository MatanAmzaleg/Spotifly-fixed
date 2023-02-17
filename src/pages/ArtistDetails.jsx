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

export const ArtistDetails = () => {

  const dispatch = useDispatch()
  const { name, id } = useParams();
  const { activeSong, isPlaying, currentSongs, currenLyrics, relatedSongs, currentSong } =
    useSelector((state) => state.songModule);

    const [artistName, setArtistName] = useState(name)

    console.log("name is:" , name);

    useEffect(() => {
      if (name.indexOf(",") !== -1) {
        setArtistName(name.substring(0, name.indexOf(",")));
      } else {
        setArtistName(name);
      }
      dispatch(fetchRelatedSongs(name))
    }, [name]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data:currentSongs.concat(relatedSongs), i }));
    dispatch(playPause(true));
  };

   return (
    <section className="song-details-sec flex column">
      <DetailsHeader artistId={artistName} currentSong={currentSong} songData={currentSongs.concat(relatedSongs)}></DetailsHeader>
      <RelatedSongs
        relatedSongs={relatedSongs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      ></RelatedSongs>
    </section>
  );
};
