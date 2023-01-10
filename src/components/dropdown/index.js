import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import './styles.scss';

function Dropdown({ items, handleChooseItem, triggerName, category }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onHandleChooseItem = (item) => {
    handleOpen();
    handleChooseItem(item);
  };

  return (
    <div>
      <Button callback={handleOpen} text={category && triggerName} />
      {open ? (
        <ul className="menu">
          {items && items.map((item) => (
            <li key={item.slug ? item.slug : item} className="menu-item">
              <Button
                callback={() => onHandleChooseItem(item)}
                text={item.name ? item.name : item}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Dropdown.propTypes = {
  triggerName: PropTypes.string,
  handleChooseItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  triggerName: undefined,
};

export default Dropdown;
