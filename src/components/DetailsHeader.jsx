import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RelatedSongs } from "./RelatedSongs";


export const DetailsHeader = ({artistId, songData}) => {
  console.log("songData", songData, "artistId", artistId);

  const [currentSong, setCurrentSong] = useState()
  const { songid } = useParams();
  const {  relatedSongs } =
  useSelector((state) => state.songModule);

  useEffect(() => {
    const fetchSongData = async () => {
      console.log(songData);
      const song = songData.find(song => song.key === songid);
      setCurrentSong(song);
    };
  
    fetchSongData();
  }, [songid]);

 
  return(
    <section className="details-header-sec flex align-center">
      <img className="song-img" src={artistId ? relatedSongs[0]?.images?.background : currentSong?.images?.coverart} alt="" />
      <div className="song-details column">
        <h1 className="song-title">{artistId ? artistId : currentSong?.title}</h1>
        <Link to={`/artists/${currentSong?.artists[0]?.adamid}/${currentSong?.subtitle}`}>
        <p className="song-subtitle">{currentSong?.subtitle}</p>
        </Link>
        <p>{currentSong?.genres?.primary}</p>
      </div>
    </section>
  )
}

