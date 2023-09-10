import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

/*import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navComponents/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Detail from "./routes/Detail"
import Home from "./routes/Home";
import ItemList from "./routes/ItemList";*/


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    </>
    
    /*<BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/category/:categoryid" element={<ItemList />} />
        <Route  path="/item/:itemid" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>*/
  );
}

export default App;
