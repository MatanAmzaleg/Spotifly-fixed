import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const DetailsHeader = ({artistId, songData}) => {
  console.log("songData", songData, "artistId", artistId);

  const [currentSong, setCurrentSong] = useState()
  const { songid } = useParams();

  useEffect(() => {
    const fetchSongData = async () => {
      const song = songData.find(song => song.key === songid);
      setCurrentSong(song);
    };
  
    fetchSongData();
  }, [songid]);

  console.log(currentSong);
  return(
    <section className="details-header-sec flex align-center">
      <img className="song-img" src={currentSong?.images?.coverart} alt="" />
      <div className="song-details column">
        <h1 className="song-title">{currentSong?.title}</h1>
        <Link to={`/artists/${currentSong?.artists[0].adamid}`}>
        <p className="song-subtitle">{currentSong?.subtitle}</p>
        </Link>
        <p>{currentSong?.genres?.primary}</p>
      </div>
    </section>
  )
}

