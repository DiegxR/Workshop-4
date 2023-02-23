import React from "react";
import "./styles.scss";

const InfoTextTech = ({ data }) => {
  return (
    <section className="SecTexts ">
      <h4>THE TERMINOLOGY…</h4>
      <h5>{data.name}</h5>
      <p>{data.description}</p>
    </section>
  );
};

export default InfoTextTech;
