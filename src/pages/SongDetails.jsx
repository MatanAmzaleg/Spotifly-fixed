import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader } from "../components/DetailsHeader";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { RelatedSongs } from "../components/RelatedSongs";
import {
  setActiveSong,
  playPause,
  getLyrics,
  fetchRelatedSongs,
  loadSongs,
} from "../redux/actions/songs.actions";
import { useEffect, useState } from "react";

export const SongDetails = () => {
  const dispatch = useDispatch();

  const { songid } = useParams();
  const { activeSong, isPlaying, currentSongs, currenLyrics, relatedSongs } =
    useSelector((state) => state.songModule);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadSongs());
      const currentSong = currentSongs.find((song) => song.key === songid);
      console.log(currentSong);
      const songArtist = currentSong.artists[0].alias;
      const songName = currentSong.title;
      dispatch(fetchRelatedSongs(songArtist));
      dispatch(getLyrics(songName, songArtist));
    };
    fetchData();
  }, [songid]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  function processLyrics() {
    // Remove the specified text
    let lyrics = currenLyrics.replace(
      "******* This Lyrics is NOT for Commercial use *******",
      ""
    );
    lyrics = lyrics.replace("(1409623148203)", "");

    // Add a line break after each comma
    lyrics = lyrics.replace(/,/g, ", \n");

    return lyrics.trim();
  }

  return (
    <section className="song-details-sec flex column">
      <DetailsHeader artistId="" songData={currentSongs}></DetailsHeader>
      <div className="lyrics-sec">
        <h1 className="lyrics-title">Lyrics:</h1>
        <pre className="lyrics">
          {processLyrics() ? processLyrics() : "No Lyrics found!"}{" "}
        </pre>
      </div>
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
