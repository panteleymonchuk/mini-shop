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


    case CART_ITEM_COUNT_ADD:


      // const newState = ++state.items[action.itemId].quantity;

      return Object.assign({}, state, {
        items: action.newArray
      });

    default:
      return state;
  }

};

export default carts;
