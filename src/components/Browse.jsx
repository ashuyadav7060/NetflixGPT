import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopular";
import useUpcomingMovies from "../hooks/useUpcomingMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};
export default Browse;
