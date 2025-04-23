import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-34 pr-2 cursor-pointer hover:w-38">
      <img src={IMG_CDN_URL + posterPath} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
