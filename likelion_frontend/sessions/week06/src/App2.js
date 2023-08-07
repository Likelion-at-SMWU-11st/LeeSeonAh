import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";
import WhoAmI from "./pages/WhoAmI";

const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/whoami" element={<WhoAmI />}></Route>
      </Route>
    </Routes>
  );
};

export default App2;
