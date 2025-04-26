import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_medium.jpg"
          alt=" Ashu"
        />
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  );
};

export default GptSearch;
