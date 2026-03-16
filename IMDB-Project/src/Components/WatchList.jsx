import { WATCHLIST_LS_KEY } from "../constants";
import storage from "../utils/storage";
import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import axios from "axios";
export default function WatchList() {
  const [watchList, setWatchList] = useState(() =>
    storage.get(WATCHLIST_LS_KEY, []),
  );
  const { removeFromWatchList } = useContext(MovieContext);
  const [genre, setGenre] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const isEmpty = !watchList || watchList.length === 0;

  // const removeFromWatchList = (movieObj) => {
  //   const updatedWatchList = watchList.filter(
  //     (movie) => movie.id !== movieObj.id,
  //   );
  //   setWatchList(updatedWatchList);
  //   storage.set(WATCHLIST_LS_KEY, updatedWatchList);
  // };

  const handleAscendingRatings = () => {
    // console.log("arrange in Ascending order");
    let sortAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });

    setWatchList([...sortAscending]);
  };

  const handleDescendingRatings = () => {
    // console.log("arrange in Descending order");
    let sortDescending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });

    setWatchList([...sortDescending]);
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredList = watchList.filter(({ title }) => {
        return title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setWatchList(filteredList);
    } else {
      setWatchList(storage.get(WATCHLIST_LS_KEY || []));
    }
  }, [searchQuery]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/movie/list`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDMxY2I2MjAyMzA0OTY3NzVkMDY0YTRhOWJiNTI0YyIsIm5iZiI6MTc3MzQ3MDQ3Mi45NjQsInN1YiI6IjY5YjUwMzA4NWQ3N2I0OWY0ZTVjOTFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOIUXTqs1pen6McfpYPF809vnPZq-EWTVGoiI_s6VnA",
      },
    };

    axios //package that helps us make request to another system, fetch is also the same, but the structure is different afaik
      .request(options)
      .then((res) => {
        const genres = res.data?.genres;
        const computeGenreMap = genres.reduce((acc, genreObj) => {
          const { id, name } = genreObj;
          return { ...acc, [id]: name };
        }, {});
        setGenre(computeGenreMap);
      })
      .catch((err) => console.error(err));
  }, []);

  // If watchList becomes empty (e.g., after removing all), show message
  if (isEmpty) {
    return <h2>No Movies are added to WatchList</h2>;
  }

  return (
    <div>
      <div className="flex justify-start">
        <input
          className="border-2 border-black px-2 py-1 mb-2"
          placeholder="Search Watchlist"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Movie name
              </th>
              <th scope="col" className="px-6 py-3 font-medium flex gap-2">
                <div
                  className="cursor-pointer"
                  onClick={handleAscendingRatings}
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                Rating
                <div
                  className="cursor-pointer"
                  onClick={handleDescendingRatings}
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Popularity
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Genre
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {watchList.map((movie) => {
              const { id, title, vote_average, popularity, genre_ids } = movie;
              return (
                <tr
                  key={id}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">{vote_average}</td>
                  <td className="px-6 py-4">{popularity}</td>
                  <td className="px-6 py-4">{genre[genre_ids[0]]}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-fg-brand hover:underline"
                      onClick={() => removeFromWatchList(movie)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
