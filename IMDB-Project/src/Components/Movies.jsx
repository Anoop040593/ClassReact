import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import storage from "../utils/storage";
import { WATCHLIST_LS_KEY, defaultWatchList } from "../constants";
import { MovieContext } from "../Context/MovieContext";
import { useSelector, useDispatch } from "react-redux";
import paginationSlice from "../redux/paginationSlice";

const actions = paginationSlice.actions;
function Movies() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([
    { url: "https://wallpaperaccess.com/full/1373551.jpg", title: "Movie 1" },
    { url: "https://wallpaperaccess.com/full/1373551.jpg", title: "Movie 2" },
    { url: "https://wallpaperaccess.com/full/1373551.jpg", title: "Movie 3" },
    { url: "https://wallpaperaccess.com/full/1373551.jpg", title: "Movie 4" },
    { url: "https://wallpaperaccess.com/full/1373551.jpg", title: "Movie 5" },
  ]);
  // const [watchList, setWatchList] = useState(
  //   storage.get(WATCHLIST_LS_KEY) || defaultWatchList,
  // );
  const { watchList, addToWatchList, removeFromWatchList, setWatchList } =
    useContext(MovieContext);
  const pageNo = useSelector((store) => store.paginationState.page);
  // const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo !== 1) {
      // setPageNo(pageNo);
      dispatch(actions.prev());
    }
    // } else setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    // setPageNo(pageNo + 1);
    dispatch(actions.next());
  };

  // const addToWatchList = (movieObj) => {
  //   const updatedWatchList = [...watchList, movieObj]; //spread old movies in watchlist -> this create a new array with updated watchlist

  //   setWatchList(updatedWatchList);
  //   storage.set(WATCHLIST_LS_KEY, updatedWatchList);
  //   console.log("adding Movie: " + movieObj.title + "  to Watchlist");
  // };

  // const removeFromWatchList = (movieObj) => {
  //   let updatedWatchList = watchList.filter(
  //     (movie) => movie.id !== movieObj.id,
  //   );
  //   setWatchList(updatedWatchList);
  //   storage.set(WATCHLIST_LS_KEY, updatedWatchList);
  // };

  useEffect(() => {
    function fetchData() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNo}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDMxY2I2MjAyMzA0OTY3NzVkMDY0YTRhOWJiNTI0YyIsIm5iZiI6MTc3MzQ3MDQ3Mi45NjQsInN1YiI6IjY5YjUwMzA4NWQ3N2I0OWY0ZTVjOTFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOIUXTqs1pen6McfpYPF809vnPZq-EWTVGoiI_s6VnA",
        },
      };
      axios //package that helps us make request to another system, fetch is also the same, but the structure is different afaik
        .request(options)
        .then((res) => {
          console.log(res.data);
          const movie = res.data?.results;
          setMovies(movie);
        })
        .catch((err) => console.error(err));
    }
    fetchData();
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj) => {
          return (
            // scale-110 for 1.1 times.
            <div key={movieObj.id}>
              <MovieCard
                movieObj={movieObj}
                addToWatchList={addToWatchList}
                watchList={watchList}
                removeFromWatchList={removeFromWatchList}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-gray-400 h-[50px] w-full mt-8 flex justify-center gap-3 p-4">
        <div onClick={handlePrev}>
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext}>
          <i className="fa-solid fa-right-long"></i>
        </div>
      </div>
    </div>
  );
  //traverse over movies arr and render movie card
}

export default Movies;
