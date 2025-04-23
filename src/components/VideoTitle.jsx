const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-66 px-15 absolute text-white bg-gradient-to-l from to-black w-screen aspect-video   ">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="p-6  text-lg font-medium w-3/5">{overview}</p>
      <div>
        <button className="p-2 px-5 rounded w-30 cursor-pointer mx-5 hover:opacity-70 bg-white text-black font-medium">
          Play
        </button>
        <button className="p-2 px-4 rounded cursor-pointer   bg-gray-500   opacity-80  text-white font-medium">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
