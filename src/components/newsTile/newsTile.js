import React from 'react';
import PropTypes from 'prop-types';
import utils from 'utils/functions';
import './styles.scss';

function NewsTile({ article }) {

  const { getShortContent } = utils;

  return (
    <article className="newsTile__container">
      <a href={article.url} target="_blank" rel="noreferrer">
        <h3>
          {article.title}
        </h3>
        <h5>{article.publishedAt}</h5>
        <div>
          {getShortContent(article.content, 60)}
        </div>
      </a>
    </article>
  );
}

NewsTile.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default NewsTile;
