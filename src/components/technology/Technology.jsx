import React, { useEffect, useState } from "react";
import "./styles.scss";
import ImgTech from "../technology/imgTech/ImgTech";
import ButtonsTech from "./buttonsTech/ButtonsTech";
import InfoTextTech from "./infoTextTech/InfoTextTech";
import { getTechnology } from "../../Services/getData";

const Technology = () => {
  const [dataTech, setDataTech] = useState([]);
  const [filter, setFilter] = useState({});
  const [click, setClick] = useState("Launch vehicle");

  useEffect(() => {
    getTechnology().then((res) => {
      setDataTech(res);
      let array = res.filter((item) => item.name == click);
      setFilter(array[0]);
    });
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleChange = ({ target }) => {
    setClick(target.id);
  };

  useEffect(() => {
    let array = dataTech.filter((item) => item.name == click);
    setFilter(array[0]);
  }, [click]);

  return (
    <section className="SecTech">
      <h5>
        <span>03</span> SPACE LAUNCH 101
      </h5>
      <article className="SecInfoTech">
        <section className="SecInfoTech__MainBtns">
          <div>{filter ? <InfoTextTech data={filter} /> : ""}</div>
          <div className="SecButtonsText">
            {dataTech.map((item, index) => (
              <ButtonsTech
                key={index}
                op={index + 1}
                id={item.name}
                handleChange={(e) => {
                  handleChange(e);
                }}
                active={item.name === click ? "activeBtn" : ""}
              />
            ))}
          </div>
        </section>
        <ImgTech opImg={click} />
      </article>
    </section>
  );
};

export default Technology;
