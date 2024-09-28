import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/footer";
import JoinUsOnInsta from "./components/JoinUsOnInsta";
import ViratFav from "./components/ViratFav";
import Restaurants from "./components/Restaurants";
import Story from "./components/Story";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Background></Background>

      <Story></Story>

      <Restaurants></Restaurants>

      <ViratFav></ViratFav>

      <Gallery></Gallery>

      <JoinUsOnInsta></JoinUsOnInsta>

      <Footer></Footer>
    </>
  );
}

export default App;
