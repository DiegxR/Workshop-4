import React, { useEffect, useState } from "react";
import "./styles.scss";
import launchLand from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import launch from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLand from "../../../assets/technology/image-spaceport-landscape.jpg";
import spaceport from "../../../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLand from "../../../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsule from "../../../assets/technology/image-space-capsule-portrait.jpg";

const ImgTech = ({ opImg }) => {
  //Estado para controlar tamaño de la ventana
  const [windowSize, setWindowSize] = useState([window.innerWidth]);
  const [mediaQueryImg, setMediaQueryImg] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
      if (window.innerWidth >= 768) {
        setMediaQueryImg(window.innerWidth);
      } else {
        setMediaQueryImg(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth >= 768) {
      setMediaQueryImg(window.innerWidth);
    }
    ChangeImage();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const ChangeImage = () => {
    if (mediaQueryImg >= 768) {
      switch (opImg) {
        case "Launch vehicle":
          setImg(launchLand);
          break;
        case "Spaceport":
          setImg(spaceportLand);
          break;
        default:
          setImg(spaceCapsuleLand);
      }
    } else {
      switch (opImg) {
        case "Launch vehicle":
          setImg(launch);
          break;
        case "Spaceport":
          setImg(spaceport);
          break;
        default:
          setImg(spaceCapsule);
      }
    }
  };

  return (
    <figure className="figureSec">
      <img src={img} alt="" />
    </figure>
  );
};

export default ImgTech;
