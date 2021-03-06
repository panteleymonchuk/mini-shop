import {
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  CART_ITEM_COUNT_ADD,
  CART_ITEM_COUNT_REMOVE
} from './../reducers/cartList';

export const addCartItem = (item) => ({ type: CART_ITEM_ADD, item });

export const removeCartItem = (index) => ({ type: CART_ITEM_REMOVE, index: index });

export const itemCountAdd = (index) => ({ type: CART_ITEM_COUNT_ADD, index: index });

export const itemCountRemove = (index) => ({ type: CART_ITEM_COUNT_REMOVE, index: index });