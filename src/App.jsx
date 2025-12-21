import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Header from "@/components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "@/pages/home/Home";
import Voluntary from "./pages/voluntary/Voluntary";

import "./globalStyle.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntary" element={<Voluntary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
