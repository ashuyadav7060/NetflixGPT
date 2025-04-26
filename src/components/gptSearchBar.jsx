import { useSelector } from "react-redux";
import lang from "../utils/languageconst";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="text-center pt-[10%] w-1/2 ml-[25%] ">
      <form className=" bg-black rounded-3xl" action="">
        <input
          className="p-4 m-4 bg-white w-8/10 rounded-4xl px-6"
          placeholder={lang[language].gptsearchplaceholder}
          type="text"
          name=""
          id=""
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-500">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
