export const CART_ITEM_ADD = "CART_ITEM_ADD";
export const CART_ITEM_REMOVE = "CART_ITEM_REMOVE";
export const CART_ITEM_COUNT_ADD = "CART_ITEM_COUNT_ADD";
export const CART_ITEM_COUNT_REMOVE = "CART_ITEM_COUNT_REMOVE";

const initialState = {
  items: []
};

const carts = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      return Object.assign({}, state, {
        items: [...state.items, action.data]
      });

    default:
      return state;
  }

};

export default carts;
