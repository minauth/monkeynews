import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
import Search from "./components/Search";

const App = () => {
  const max = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="cosmetics"
                max={max}
                country="ru"
                category="косметика"
                viewCategory="косметике"
              />
            }
          />
          <Route
            exact
            path="/beauty"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="beauty"
                max={max}
                country="ru"
                category="beauty"
                viewCategory="красоте"
              />
            }
          />
          <Route
            exact
            path="/fashion"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="fashion"
                max={max}
                country="ru"
                category="fashion"
                viewCategory="моде"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
