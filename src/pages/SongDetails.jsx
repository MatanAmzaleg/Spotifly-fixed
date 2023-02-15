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
        let currentSong = currentSongs.find((song) => song.key === songid);
        if(!currentSong){
          console.log(relatedSongs, currentSongs);
          currentSong = relatedSongs.find((song) => song.key === songid);
          console.log("currentSong", currentSong);
        }
        if (currentSong) {
          console.log(currentSong);
          let songArtist
          if(currentSong.artists[0].alias) songArtist = currentSong.artists[0].alias;
          else songArtist = currentSong.subtitle
          const songName = currentSong.title;
          console.log("songArtist", songArtist, "songName", songName);
          dispatch(fetchRelatedSongs(songArtist));
          dispatch(getLyrics(songName, songArtist));
        }
      };
      fetchData();
    }, [songid]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data:currentSongs.concat(relatedSongs), i }));
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
      <DetailsHeader artistId="" songData={currentSongs.concat(relatedSongs)}></DetailsHeader>
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
