import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-25 relative z-20 pl-7">
        <MovieList
          title={"Now Playing"}
          movies={movies?.NowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Trending"}
          movies={movies?.NowPlayingMovies}
        ></MovieList>
        <MovieList title={"Popular"} movies={movies?.popularMovies}></MovieList>
        <MovieList
          title={"upcoming"}
          movies={movies?.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
