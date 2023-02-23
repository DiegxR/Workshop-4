import React from "react";
import "./styles.scss";

const ButtonsTech = ({ handleChange, op, id, active }) => {
  return (
    <section className="SecButtonsTech">
      <button
        id={id}
        className={`btnInfoTech ${active} `}
        onClick={(e) => {
          handleChange(e);
        }}
      >
        {op}
      </button>
    </section>
  );
};

export default ButtonsTech;
