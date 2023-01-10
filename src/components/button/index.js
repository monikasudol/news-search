import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button({ text, callback, type = 'button' }) {
  const onClickButton = (event) => {
    event.preventDefault();
    callback();
  };
  return (
    <button
      className="button"
      onClick={onClickButton}
      type={type}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: (PropTypes.string || PropTypes.number).isRequired,
  callback: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
