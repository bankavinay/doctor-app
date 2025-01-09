import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "../src/Pages/Home";
import Doctors from "../src/Pages/Doctors";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Footer from "../src/Pages/Footer";
import SignIn from "../src/Pages/SignIn";
import SignUp from "../src/Pages/SignUp";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import DoctorsDetails from "./Pages/DoctorsDetails";
import CategoryFilter from "./Pages/CategoryFilter";
const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/doctors" exact element={<Doctors />} />
        <Route path="/appointment/:id" exact element={<DoctorsDetails />} />
        <Route path="/doctors/:category" exact element={<CategoryFilter />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
