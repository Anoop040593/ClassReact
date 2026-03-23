import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

function App() {
  const loadingComponent = <div>Loading...</div>;
  const homePageLoadingComponent = <div>Home Page Loading...</div>;
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={loadingComponent}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={homePageLoadingComponent}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
