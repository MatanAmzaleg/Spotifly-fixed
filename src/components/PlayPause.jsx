import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="pause" onClick={handlePause}></FaPauseCircle>
  ) : (
    <FaPlayCircle className="play" onClick={handlePlay}></FaPlayCircle>
  );
