import { SongBar } from "./SongBar";

export const RelatedSongs = ({
  relatedSongs,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  console.log(relatedSongs);
  return (
    <section className="related-songs-sec">
      <h1 className="related-title">Related songs</h1>
    </section>
  );
};
