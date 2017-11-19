import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { itemCountAdd, itemCountRemove, removeCartItem } from './../actions/cartList';


import './CartList.css';

class CartList extends Component {

  _getTotalPrice = () => {
    const { cartList } = this.props;
    let total = 0;

    !!cartList.length && cartList.map((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  _getCartList = () => {

    const { cartList, itemCountAdd, itemCountRemove, removeCartItem } = this.props;
    return !!cartList.length && cartList.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button className="CartList__btn" onClick={() => itemCountRemove(index)}>-</button>
            {item.quantity}
            <button className="CartList__btn" onClick={() => itemCountAdd(index)}>+</button>
          </td>
          <td>
            {item.price * item.quantity} USD
          </td>
          <td>
            <button className="CartList__btn" onClick={() => removeCartItem(index)}>remove</button>
          </td>
        </tr>
      );
    });
  };

  render() {

    const { cartList } = this.props;

    const list = this._getCartList();

    const totalPrice = this._getTotalPrice();

    return (
      <div className="CartList">
        <h3 className="CartList__header">Cart</h3>
        <div className="CartList__products">
          {
            !!cartList.length ? (
              <div>
                <table border="1" className="CartList__table">
                  <tbody>
                    <tr>
                      <td>Item</td>
                      <td>Price</td>
                      <td>Quantity</td>
                      <td>Total price</td>
                      <td/>
                    </tr>
                    {list}
                  </tbody>
                </table>
                <p>Total: {totalPrice} USD</p>
              </div>
            ) : (
              <p>Cart is empty</p>
            )
          }
        </div>
      </div>
    );
  }
}

CartList.propTypes = {
  cartList: PropTypes.array,

  // actions
  itemCountAdd: PropTypes.func,
  itemCountRemove: PropTypes.func,
  removeCartItem: PropTypes.func,
};

const mapStateToProps = ({ cartList }) => ({
  cartList: cartList
});

const mapDispatchToProps = {
  itemCountAdd,
  itemCountRemove,
  removeCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
