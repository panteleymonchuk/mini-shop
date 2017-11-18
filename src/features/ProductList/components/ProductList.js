import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem/ListItem';

import './ProductList.css';

class ProductList extends Component {
  render() {

    const { productList } = this.props;

    const products = productList.map((listItem) => <ListItem key={listItem.id} {...listItem}/>);

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
  productList: PropTypes.array
};

const mapStateToProps = ({ productList }) => ({
  productList
});

export default connect(mapStateToProps, null)(ProductList);
