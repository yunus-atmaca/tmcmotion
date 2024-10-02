import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, NoMatch, MapExplorerPrivacyPolicy } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="map_explorer_privacy_policy"
          element={<MapExplorerPrivacyPolicy />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
