// eslint-disable-next-line
// @ts-nocheck
import { useEffect, useState, useRef } from 'react';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import phonesFromServer from '../../api/phones.json';
import { PhoneFromServer } from '../../types/Phone';
import './HotPrices.scss';

export const HotPrices = ({ title }) => {
  const [phones, setPhones] = useState<PhoneFromServer[]>([]);

  useEffect(() => {
    setPhones(phonesFromServer);
  }, []);

  const sliderRef = useRef(null);
  const sliderImageRef = useRef(null);
  let sliderCardWidth = 0;

  if (sliderImageRef.current) {
    sliderCardWidth = sliderImageRef.current.offsetWidth;
  }

  const handleRightButton = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;

      sliderRef.current.scrollTo(currentScroll - sliderCardWidth - 80, 0);
    }
  };

  const handleLeftButton = () => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;

      sliderRef.current.scrollTo(currentScroll + sliderCardWidth + 80, 0);
    }
  };

  return (
    <div className="hotPrices">
      <div className="hotPrices__top top">
        <h1 className="subtitle">{title}</h1>
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
