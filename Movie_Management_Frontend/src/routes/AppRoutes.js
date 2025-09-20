import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListMovie from "../Components/ListMovie";
import UpdateMovie from "../Components/UpdateMovie";
import Home from "../Pages/Home";
import AddNewMovie from "../Pages/AddNewMovie";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/ListMovie" element={<ListMovie />} />
        <Route exact path="/AddNewMovie" element={<AddNewMovie />} />
        <Route path="/UpdateMovie/:id" element={<UpdateMovie />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
