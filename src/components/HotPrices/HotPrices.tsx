import { useEffect, useState, useRef } from 'react';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import phonesFromServer from '../../api/phones.json';
import { PhoneFromServer } from '../../types/Phone';
import './HotPrices.scss';

export const HotPrices = () => {
  const [phones, setPhones] = useState<PhoneFromServer[]>([]);

  useEffect(() => {
    setPhones(phonesFromServer);
    console.log(phones);
  }, []);

  const [isArrowLeft, setIsArrowLeft] = useState(false);
  const [isArrowRight, setIsArrowRight] = useState(true);

  const sliderRef = useRef(null);
  const sliderImageRef = useRef(null);
  let sliderCardWidth = 0;

  if (sliderImageRef.current) {
    sliderCardWidth = sliderImageRef.current.offsetWidth;
  }

  const handleRightButton = () => {
    if (sliderRef.current) {
      setIsArrowRight(true);

      const currentScroll = sliderRef.current.scrollLeft;

      sliderRef.current.scrollTo(currentScroll - sliderCardWidth - 16, 0);

      if (currentScroll - sliderCardWidth <= 0) {
        setIsArrowLeft(false);
      }
    }
  };

  const handleLeftButton = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = sliderRef.current.scrollWidth;

      sliderRef.current.scrollTo(currentScroll + sliderCardWidth + 16, 0);
      setIsArrowLeft(true);
      if (currentScroll + sliderCardWidth >= maxScroll) {
        setIsArrowLeft(false);
      }
    }
  };

  return (
    <div className="hotPrices">
      <div className="hotPrices__top top">
        <h1 className="subtitle">Hot Prices</h1>
        <div className="top__buttons">
          <button
            onClick={handleLeftButton}
            type="button"
            className="slider__button card-slider__button-left"
          />
          <button
            onClick={handleRightButton}
            type="button"
            className="slider__button card-slider__button-right"
          />
        </div>
      </div>

      <ul className="hotPrices__list" ref={sliderRef}>
        {phones.map(phone => (
          <li key={phone.id} className="hotPrices__item" ref={sliderImageRef}>
            <CatalogItem phone={phone} />
          </li>
        ))}
      </ul>
    </div>
  );
};
