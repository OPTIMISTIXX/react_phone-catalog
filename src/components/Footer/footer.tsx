import './footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <hr className="footer-horizontal-line" />
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__icon footer__block block">
            <img className="block__img" src="./img/svg/logo.svg" alt="logo" />
          </div>
          <div className="footer__text footer__block block">
            <Link className="block__text">GITHUB</Link>
            <Link className="block__text">CONTACTS</Link>
            <Link className="block__text">RIGHTS</Link>
          </div>
          <div className="footer__button footer__block block">
            <div className="block__container">
              <Link className="block__text--thin">Back to top</Link>
              <Link to="button" className="block__button" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};