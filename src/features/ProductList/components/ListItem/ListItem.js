import React from 'react';
import PropTypes from 'prop-types';

import listItem from './../../../../images/listItem.png';

import './ListItem.css';

const ListItem = ({ id, name, price, handleBtnClick }) => {

  const itemObj = {
    id: id,
    name: name,
    price: price,
    quantity: 1
  };

  return (
    <div className="listItem">
      <img className="listItem__img" src={listItem} alt=""/>
      <h4 className="listItem__name">{name}</h4>
      <p className="listItem__price">{price} USD</p>
      <button className="listItem__addToCart" onClick={() => handleBtnClick(itemObj)}>Add to cart</button>
    </div>
  );
};

const propTypes = {
  name: PropTypes.string
};
const defaultProps = {};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;