import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCartItem, itemCountAdd } from './../../CartList/actions/cartList';

import ListItem from './ListItem/ListItem';

import './ProductList.css';

class ProductList extends Component {

  constructor(props) {
    super(props);

    this._handleBtnClick = this._handleBtnClick.bind(this);
    this._isItemExist = this._isItemExist.bind(this);
  }

  _isItemExist(listItem) {
    const { cartList } = this.props;

    for (let i = 0; i < cartList.length; i++) {
      if (listItem.id === cartList[i].id) {
        return i;
      }
    }

    return false;
  }

  _handleBtnClick(listItem) {
    const { addCartItem, cartList, itemCountAdd } = this.props;
    let existPosition = false;

    if (!!cartList.length) {
      existPosition = this._isItemExist(listItem);
      existPosition !== false ? itemCountAdd(existPosition) : addCartItem(listItem);
    } else {
      addCartItem(listItem);
    }

    // !cartList.length && addCartItem(listItem);
  }

  render() {

    const { productList } = this.props;

    const products = productList.map((listItem) => <ListItem key={listItem.id} {...listItem} handleBtnClick={this._handleBtnClick}/>);

    return (
      <div className="productList">
        <h3 className="productList__header">Products</h3>
        <div className="productList__products">
          {products}
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array,

  //actions
  addCartItem: PropTypes.func,
  itemCountAdd: PropTypes.func,
};

const mapStateToProps = ({ productList, cartList }) => ({
  productList,
  cartList: cartList

});

const mapDispatchToProps = {
  addCartItem,
  itemCountAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
