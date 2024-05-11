// eslint-disable-next-line
// @ts-nocheck
import { useState, useEffect } from 'react';
import { GadgetsList } from '../../components/GadgetsList/GadgetsList';
import phonesFromServer from '../../api/phones.json';
import { PhoneFromServer } from '../../types/Phone';
import { DropDown } from '../../components/DropDown';
import { Pagination } from '../../components/Pagination';
import './PhonePage.scss';
import './PhonePageDesktop.scss';
import './PhonePageTablet.scss';
import './PhonePage__Phone.scss';
import { useSearchParams } from 'react-router-dom';
import { sortingByVariants } from '../../variables/dropDownSorting';
import { perPageVariants } from '../../variables/dropDownSorting';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';

export const PhonePage = () => {
  const [phones, setPhones] = useState<PhoneFromServer[]>([]);
  const [displayedPhones, setDisplayedPhones] = useState<PhoneFromServer[]>([]);
  const [searchParams] = useSearchParams();

  const sortedPhones = phones;

  const sortBy = searchParams.get('sort');
  const perPage = searchParams.get('perPage') || sortedPhones.length.toString();
  const currentPage = searchParams.get('page') || 1;

  useEffect(() => {
    setPhones(phonesFromServer);
  }, []);

  useEffect(() => {
    const displayedPhonesArray = [];

    for (let i = 0; i < sortedPhones.length; i += +perPage) {
      displayedPhonesArray.push(sortedPhones.slice(i, i + +perPage));
    }

    setDisplayedPhones(displayedPhonesArray[+currentPage - 1] || []);
  }, [sortBy, perPage, currentPage, sortedPhones]);

  return (
    <main className="main">
      <div className="container">
        <BreadCrumbs pageName="Phones" />
        <h1 className="title">Mobile phones</h1>
        <h3 className="main__subtitle">{phones.length} Models</h3>
        <div className="dropdown-container">
          <DropDown title="sort by" dropDownData={sortingByVariants} />
          <DropDown title="items on page" dropDownData={perPageVariants} />
        </div>
        <GadgetsList phones={displayedPhones} />
        {/* {+perPage < phones.length && ( */}
        <Pagination
          total={phones.length}
          perPage={perPage}
          currentPage={+currentPage}
        />
        {/* // )} */}
      </div>
    </main>
  );
};
