import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { savelocal } from "../../Services/localStorage";
import NavBar from "../navBar/NavBar";
import "./styles.scss";

const App = () => {
  return (
    <main>
      <NavBar />
      <section className="SecComponentOutlet">
        <Outlet />
      </section>
    </main>
  );
};

export default App;
