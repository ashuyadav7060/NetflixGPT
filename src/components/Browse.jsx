import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopular";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";

import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  const togglegpt = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header></Header>
      {togglegpt ? (
        <GptSearch></GptSearch>
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};
export default Browse;
