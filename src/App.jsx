import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Video />} />
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
