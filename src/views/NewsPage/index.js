import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewsTile from 'components/newsTile/newsTile';
import categories from 'consts/categories';
import { getItemFromLocalStorage } from 'services/localStorage';
import Filters from './components/Filters';
import './styles.scss';

function NewsPage() {
  const news = useSelector((store) => store.news.newsArticles);
  const [country, setCountry] = useState(null);
  const [pageSize, setPageSize] = useState(null);

  useEffect(() => {
    const searchedCountry = getItemFromLocalStorage(categories.country);
    setCountry(searchedCountry?.name);
    const pageSizeForResult = getItemFromLocalStorage(categories.pageSize);
    setPageSize(pageSizeForResult);
  }, [news]);

  return (
    <div className="newsPage__container">
      <Filters />
      {news && news.length
        ? (
          <span>
            {`Wyświetlono ${pageSize} najnowszych wiadomości dla
            kraju: ${country}`}
          </span>
        ) : null}
      {news && news.length ? (
        <div className="newsPage__newsBoard">
          {news.map((article) => (
            <NewsTile
              key={article.url}
              article={article}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default NewsPage;
