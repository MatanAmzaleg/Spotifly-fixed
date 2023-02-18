import { Link, useNavigate } from "react-router-dom";

export const ArtistCard = ({track}) => {

  const navigate = useNavigate()


  return (
    <section className="artist-card-sec flex column" onClick={()=> navigate(`/artists/${track?.artists[0]?.adamid}/${track?.subtitle}`)}>
      <div className="inside-card relative">
        <img src={track.images?.background || track.images?.coverart} alt="" />
      </div>
      <div className="desc flex column align-center justify-center">
      <p className="artist-title">
        {track?.subtitle}
      </p>
      </div>
          </section>
  )

};


