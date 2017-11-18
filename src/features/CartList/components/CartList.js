import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ListItem from './ListItem/ListItem';

import './CartList.css';

class CartList extends Component {
  render() {

    // const { CartList } = this.props;

    // const products = CartList.map((listItem) => <ListItem key={listItem.id} {...listItem}/>);

    return (
      <div className="CartList">
        <h3 className="CartList__header">Cart</h3>
        <div className="CartList__products">
          asdf
        </div>
      </div>
    );
  }
}

CartList.propTypes = {
  CartList: PropTypes.array
};

const mapStateToProps = ({ CartList }) => ({
  CartList
});

export default connect(mapStateToProps, null)(CartList);
