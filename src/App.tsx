import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import StreamList from "./pages/StreamList";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";
import "./App.css";
import logo from "./logo.svg"; // NEW IMPORT FOR LOGO
function App() {
  return (
    <Router>
      <Navbar />
      {/* Display the Logo at the top */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src={logo} alt="StreamList Logo" width="100" />
      </div>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
