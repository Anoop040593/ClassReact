import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WatchList from "./Components/WatchList";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import MovieContextWrapper from "./Context/MovieContext";
function App() {
  return (
    <MovieContextWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </MovieContextWrapper>
  );
}

export default App;
