import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../Context/MovieContext";
export default function Banner() {
  const [bannerImage, setBannerImage] = useState(
    "https://wallpaperaccess.com/full/1373551.jpg",
  );
  const [title, setTitle] = useState("Placeholder title");
  const { watchList, addToWatchList, removeFromWatchList, setWatchList } =
    useContext(MovieContext);
  console.log({ watchList, addToWatchList, removeFromWatchList, setWatchList });
  useEffect(() => {
    function fetchData() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
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
          const movie = res.data?.results[0];
          setBannerImage(movie["backdrop_path"]);
          setTitle(movie["title"]);
        })
        .catch((err) => console.error(err));
    }
    fetchData();
  }, []);

  return (
    <>
      <div
        className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerImage})`,
        }}
      >
        <div className="text-white w-full text-center text-2xl">{title}</div>
      </div>
    </>
  );
}
