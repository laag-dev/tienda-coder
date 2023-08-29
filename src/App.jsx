import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navComponents/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Detail from "./routes/Detail"
import Home from "./routes/Home";
import ItemList from "./routes/ItemList";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemList />} />
        <Route exact path="/item/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
