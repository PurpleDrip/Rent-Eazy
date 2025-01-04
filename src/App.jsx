import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buy from "./pages/Buy";
import Enquire from "./pages/Enquire";
import Listing from "./pages/Listing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Buy />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
