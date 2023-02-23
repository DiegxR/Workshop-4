import { React, useEffect, useState } from "react";
import { getCrew } from "../../Services/getData";
import icon from "../../assets/crew/image-anousheh-ansari.png";
import "./crewStyles.scss";

const Crew = () => {
  const [data, setData] = useState([]);
  const [person, setPerson] = useState({});
  const [name, setName] = useState("Anousheh Ansari");

  useEffect(() => {
    getCrew().then((response) => {
      setData(response);
      console.log(response);
      let filtroPersonas = response.filter(
        (filtroPersona) => filtroPersona.name == name
      );

      setPerson(filtroPersonas[0]);
    });
  }, []);

  useEffect(() => {
    let filtroPersonas = data.filter(
      (filtroPersona) => filtroPersona.name == name
    );

    setPerson(filtroPersonas[0]);
  }, [name]);

  const handleClick = ({ target }) => {
    console.log(target);
    setName(target.id);
  };

  return (
    <section className="secCrew">
      <h2 className="meetText">
        <span>02</span> Meet your crew
      </h2>

      <div className="infoCrew">
        <figure className={name}></figure>

        <div className="infoCrew_text">
          <div className="Carrucel">
            {data.map((item, index) => (
              <button
                onClick={handleClick}
                id={item.name}
                key={index}
                className="Carrucel_btn"
              ></button>
            ))}
          </div>

          <div className="infoCrew_p">
            <p className="rol">{person ? person.role : ""}</p>
            <h2 className="name">{person ? person.name : ""}</h2>
            <p className="bio">{person ? person.bio : ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
