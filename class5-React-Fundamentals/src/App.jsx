import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Friend from "./pages/Friend";
function App() {
  const shouldSeeFriends = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Template Route  */}
      <Route
        path="/friend/:id"
        element={
          shouldSeeFriends ? <Friend isAdmin={false} /> : <Navigate to="/" />
        }
      />
      "{/* <!-- Better to keep the wild card at the end --> */}
      {/* <Route path="/abc" element={<Navigate to="/home" />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
