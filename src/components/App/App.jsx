import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default App;
