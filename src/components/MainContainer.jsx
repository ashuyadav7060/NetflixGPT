import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      ></VideoTitle>
      <VideoBackground movieId={mainMovie.id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
