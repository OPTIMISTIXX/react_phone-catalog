export const PhoneDetails = ({ phone }) => {
  return (
    <>
      <div className="grid-item__price">
        {phone.discount !== 0 ? (
          <>
            <span className="discouunt-price">${phone.priceDiscount}</span>
            <span className="price">${phone.priceRegular}</span>
          </>
        ) : (
          <span className="price">${phone.price}</span>
        )}
      </div>
      <div className="grid-item__buttons card-button">
        <button type="button" className="card-button__cart card-button__item">
          Add to cart
        </button>
        <button type="button" className="card-button__fav card-button__item">
          <img src="/img/svg/favorites.svg" alt="fav" />
        </button>
      </div>
      <ul className="grid-item__characteristics characteristics">
        <li className="characteristics__screen characteristics-info">
          <p className="characteristics-info__key">Screen</p>
          <p className="characteristics-info__value">{phone.screen}</p>
        </li>
        <li className="characteristics__capacity characteristics-info">
          <p className="characteristics-info__key">Capacity</p>
          <p className="characteristics-info__value">{phone.capacity}</p>
        </li>
        <li className="characteristics__ram characteristics-info">
          <p className="characteristics-info__key">RAM</p>
          <p className="characteristics-info__value">{phone.ram}</p>
        </li>
      </ul>
    </>
  );
};
