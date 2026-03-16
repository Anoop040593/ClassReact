import storage from "../utils/storage";
import { WATCHLIST_LS_KEY, defaultWatchList } from "../constants";
import { createContext, useState } from "react";

export const MovieContext = createContext();
export default function MovieContextWrapper({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    const updatedWatchList = [...watchList, movieObj]; //spread old movies in watchlist -> this create a new array with updated watchlist

    setWatchList(updatedWatchList);
    storage.set(WATCHLIST_LS_KEY, updatedWatchList);
    console.log("adding Movie: " + movieObj.title + "  to Watchlist");
  };

  const removeFromWatchList = (movieObj) => {
    let updatedWatchList = watchList.filter(
      (movie) => movie.id !== movieObj.id,
    );
    setWatchList(updatedWatchList);
    storage.set(WATCHLIST_LS_KEY, updatedWatchList);
  };

  return (
    <MovieContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList, setWatchList }}
    >
      {children}
    </MovieContext.Provider>
  );
}
