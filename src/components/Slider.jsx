import { images } from "../assets/images";
import { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentState === images.length - 1
        ? setCurrentState(0)
        : setCurrentState(currentState + 1);

      console.log(`"current sate is "  ${currentState}`);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentState]);

  const nextSlide = (index) => {
    setCurrentState(index);
    console.log(`"index " ${index}`);
  };

  return (
    <section className="sliderSection">
      <div className="blur"></div>

      <picture className="sliderImage">
        <source
          srcSet={images[currentState].mobileImage}
          media="(max-width: 480px)"
        />
        <img src={images[currentState].webImage} alt="" />
      </picture>

      <div className="navigationBtn">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${currentState === index ? "active-dot" : "dot"}`}
            onClick={() => nextSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
