import { CatalogItem } from '../CatalogItem/CatalogItem';
import { Phone } from '../../types/Phone';
import './GadgetsList.scss';

type Props = {
  phones: Phone[];
};

export const GadgetsList: React.FC<Props> = ({ phones }) => {
  return (
    <ul className="catalog-grid">
      {phones.map((phone: Phone) => (
        <li key={phone.id} className="catalog-grid__item grid-item">
          <CatalogItem phone={phone} />
        </li>
      ))}
    </ul>
  );
};
