import { SongBar } from "./SongBar";

export const RelatedSongs = ({
  relatedSongs,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  console.log(relatedSongs);
  return (
    <section className="related-songs-sec">
      <h1 className="related-title">Related songs:</h1>
      <div className="songs">
        {relatedSongs.length !== 0  ? relatedSongs.slice(0,10).map((song, i) => {
          return <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          ></SongBar>;
        }) : null}
      </div>
    </section>
  );
};
