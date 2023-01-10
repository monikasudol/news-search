import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/button';
import Dropdown from 'components/dropdown';
import api from 'services/api';
import { getItemFromLocalStorage, saveItemToLocalStorage } from 'services/localStorage';
import { setNews } from 'store/news/news';
import categories from 'consts/categories';
import countries from 'data/countries';
import pageSizes from 'data/pageSizes';
import './styles.scss';

function Filters() {
  const [filteredParams, setFilteredParams] = useState({});

  const dispatch = useDispatch();

  const onHandleChooseItem = (category, item) => {
    setFilteredParams((params) => ({
      ...params,
      [category]: item,
    }));
  };

  useEffect(() => {
    const getResultsPerPageFromLocalStorage = () => {
      let pageSize = getItemFromLocalStorage(categories.pageSize);
      if (!pageSize) {
        pageSize = 10;
      }
      setFilteredParams((params) => ({
        ...params,
        [categories.pageSize]: pageSize,
      }));
    };

    const getCountryFromLocalStorage = () => {
      let country = getItemFromLocalStorage(categories.country);
      if (!country) {
        country = countries[0];
      }
      setFilteredParams((params) => ({
        ...params,
        [categories.country]: country,
      }));
    };

    getResultsPerPageFromLocalStorage();
    getCountryFromLocalStorage();
  }, []);

  const handleSearchNews = async () => {
    saveItemToLocalStorage(categories.country, filteredParams[categories.country]);
    saveItemToLocalStorage(categories.pageSize, filteredParams[categories.pageSize]);
    const { getNews } = api;
    try {
      const news = await getNews(
        filteredParams[categories.country].slug, 1, filteredParams[categories.pageSize]);
      if (news.articles.length) {
        dispatch(setNews(news.articles));
      }
    } catch (error) {
      // here we should handle error
    }
  };

  return (
    <div className="filtersContainer">
      <div className="filtersContainer__filterWrapper">
        <h5>Country:</h5>
        <Dropdown
          triggerName={filteredParams[categories.country]?.name}
          items={countries}
          category={categories.country}
          handleChooseItem={(item) => onHandleChooseItem(categories.country, item)}
        />
      </div>
      <div className="filtersContainer__filterWrapper">
        <h5>Page Size:</h5>
        <Dropdown
          category={categories.pageSize}
          triggerName={filteredParams[categories.pageSize]}
          items={pageSizes}
          handleChooseItem={(item) => onHandleChooseItem(categories.pageSize, item)}
        />
      </div>
      <Button callback={handleSearchNews} text="Search news" />
      {filteredParams.country && (
      <h4>
        Wyświetlono
        {filteredParams.pageSize}
        {' '}
        najnowszych wiadomości dla kraju:
        {filteredParams.country.name}
      </h4>
      )}
    </div>
  );
}

export default Filters;
