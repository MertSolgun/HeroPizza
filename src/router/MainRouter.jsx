import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Home from "../page/Home";
import { Menu } from "../page/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaDetails from "../page/PizzaDetails";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Menu/:id" element={<PizzaDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
