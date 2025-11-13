import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AzureCallback from "./components/AzureCallback";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<AzureCallback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
