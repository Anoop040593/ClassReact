import React from "react";

function MovieCard({
  movieObj,
  addToWatchList,
  watchList,
  removeFromWatchList,
}) {
  const presentInWL = () => {
    //implement logi using "some" method of JS
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true; //change button to cross
      }
    }
    return false; //change to heart emoji
  };
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300ms cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj["poster_path"]})`,
      }}
    >
      <div className="text-white w-full text-center text-xl bg-gray-900/70 rounded-xl p-2">
        {movieObj.title}
      </div>

      <div className="flex justify-center items-center m-4 h-8 w-8 bg-gray-900/60">
        {presentInWL() ? (
          <div onClick={() => removeFromWatchList(movieObj)}>❌</div>
        ) : (
          <div onClick={() => addToWatchList(movieObj)}>❤️</div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
