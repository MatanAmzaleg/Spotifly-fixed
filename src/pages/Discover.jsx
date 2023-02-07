import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { SongCard } from "../components/SongCard";
import { genres } from "../assets/constants";
import { useSelector, useDispatch } from "react-redux";
import { useGetTopChartsQuery } from "../services/youtubeApi.service";




export const Discover = () => {

  const dispath = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  console.log(data?.items);
  console.log(genres);

  if (isFetching) return <Loader title="Loading songs..."></Loader>;

  if (error) return <Error></Error>;

  return (
    <section className="discover-sec flex align-center column">
      <h2 className="main-title">Discover</h2>
      <select onChange={() => {}} className="genre-select" name="genres" id="">
        {genres.map((genre) => {
          return (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          );
        })}
      </select>

      <section className="songs-sec">
        {data?.items.slice(0, 6).map((song, i) => {
          return <SongCard key={song.id} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}></SongCard>;
        })}
      </section>
    </section>
  );
};
