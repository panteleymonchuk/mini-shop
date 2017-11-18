import {
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  CART_ITEM_COUNT_ADD,
  CART_ITEM_COUNT_REMOVE
} from './../reducers/cartList';

export const addCartItem = (item) => ({ type: CART_ITEM_ADD, data: item });