import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./containers/About";
import Home from "./containers/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
