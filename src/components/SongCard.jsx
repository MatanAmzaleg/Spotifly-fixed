import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { PlayPause } from "./PlayPause"
import {playPause, setActiveSong} from "../redux/features/playerSlice"

export const SongCard = ({song, isPlaying, activeSong, i, data}) => {
  console.log(song)

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
        <img src={song.bestThumbnail?.url} alt="" />
      </div>
      <div className="desc flex align-center justify-center">
    <h1 className="song-title">
      <Link to={`/songs/${song.id}`}>
      {song.title}
      </Link>
      </h1>
      </div>
  </section>
    )
  }


