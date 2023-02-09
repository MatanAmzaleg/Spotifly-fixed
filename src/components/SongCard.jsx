import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { PlayPause } from "./PlayPause"
import { setActiveSong } from "../redux/actions/songs.actions"
import {playPause,} from "../redux/features/playerSlice"

export const SongCard = ({song, isPlaying, activeSong, i, data}) => {
  
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
  }

  return(
    <section className="song-card-sec flex column">
      <div className="inside-card relative">
        <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick}/>
        <img src={song.images?.coverart || song.images?.background} alt="" />
      </div>
      <div className="desc flex column align-center justify-center">
    <h1 className="song-title">
      <Link to={`/songs/${song.id}`}>
      {song.title}
      </Link>
      </h1>
      <p className="song-subtitle">
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artist'}>
        {song.subtitle}
        </Link>
      </p>
      </div>
  </section>
    )
  }


