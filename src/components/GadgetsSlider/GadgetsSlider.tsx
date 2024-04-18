import { useState } from 'react';
import './GadgetsSlider.scss';

export const GadgetsSlider = () => {
  const [position, setPosition] = useState(0);
  const pictureWidth = 1440;

  const handleLeftButton = () => {
    setPosition(currentPosition => currentPosition + pictureWidth);
  };

  const handleRightButton = () => {
    setPosition(currentPosition => currentPosition - pictureWidth);
  };

  return (
    <div className="carousel">
      <button onClick={handleLeftButton} className="carousel__button">
        ⇦
      </button>
      <ul
        className="carousel__gallery gallery"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        <li className="gallery__item">
          <img src="./img/banners/4.svg" alt="0" />
        </li>
        <li className="gallery__item">
          <img src="./img/banners/4.svg" alt="1" />
        </li>
        <li className="gallery__item">
          <img src="./img/banners/4.svg" alt="2" />
        </li>
      </ul>
      <button onClick={handleRightButton} className="carousel__button">
        ⇨
      </button>
    </div>
  );
};
