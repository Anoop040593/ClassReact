import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    import("./pages/Home").then((module) => setHomePage(() => module.default));
  }, []);

  const landHomePage = () => {
    import("./pages/Home").then((module) => setHomePage(() => module.default));
  };

  const landAboutPage = () => {
    import("./pages/About").then((module) =>
      setAboutPage(() => module.default),
    );
  };
  const landContactPage = () => {
    import("./pages/Contact").then((module) =>
      setContactPage(() => module.default),
    );
  };

  const loadingComponent = <div>Loading...</div>;
  return (
    <BrowserRouter>
      <NavBar
        loadHomePage={landHomePage}
        loadAboutPage={landAboutPage}
        landContactPage={landContactPage}
      />
      <Routes>
        <Route path="/" element={HomePage ? <HomePage /> : loadingComponent} />
        <Route
          path="/about"
          element={AboutPage ? <AboutPage /> : loadingComponent}
        />
        <Route
          path="/contact"
          element={ContactPage ? <ContactPage /> : loadingComponent}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
