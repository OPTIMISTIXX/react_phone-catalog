import { NavLink } from 'react-router-dom';
import { NavItem } from '../NavItem';
import './Header.scss';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'nav__link nav__link--active' : 'nav__link';
};

const getHeaderActionClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'header__actio header__action--active' : 'header__action';
};

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <NavLink className="nav__link" to="./">
          <img
            className="nav__logo logo"
            src="../img/svg/logo.svg"
            alt="logo"
          />
        </NavLink>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className={getNavLinkClass} to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={getNavLinkClass} to="/phones">
              PHONES
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={getNavLinkClass} to="/tablets">
              TABLETS
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className={getNavLinkClass} to="/accessories">
              ACCESSORIES
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <NavLink className={getHeaderActionClass} to="/favorites">
          <NavItem type="fav"></NavItem>
        </NavLink>
        <NavLink className={getHeaderActionClass} to="/cart">
          <NavItem type="cart"></NavItem>
        </NavLink>
      </div>
    </header>
  );
};
