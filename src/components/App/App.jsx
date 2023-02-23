import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./styles.scss";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("home");
  }, []);

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default App;
