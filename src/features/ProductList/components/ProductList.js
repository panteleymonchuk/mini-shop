import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addCartItem } from './../../CartList/actions/cartList';

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
        return true;
      }
    }

    return false;
  }

  _handleBtnClick(listItem) {
    const { addCartItem, cartList } = this.props;

    console.log(this._isItemExist(listItem));

    addCartItem(listItem);
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
  addCartItem: PropTypes.func
};

const mapStateToProps = ({ productList, cartList }) => ({
  productList,
  cartList: cartList.items

});

const mapDispatchToProps = {
  addCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
