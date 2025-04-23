import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies to display.</p>
      </div>
    );
  }
  return (
    <div className=" ">
      <h1 className="font-medium text-xl px-6 py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard
              key={movies.id}
              posterPath={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
