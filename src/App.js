
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Os from "./pages/Os";
import NoPage from "./pages/NoPage";
import React from "react";

function App() {
  return (
      <HashRouter>
          <Routes>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/os" element={<Os />}/>         
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NoPage />}/>
          </Routes>
      </HashRouter>
  );
}

export default App;

