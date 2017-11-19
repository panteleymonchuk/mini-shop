export const CART_ITEM_ADD = "CART_ITEM_ADD";
export const CART_ITEM_REMOVE = "CART_ITEM_REMOVE";
export const CART_ITEM_COUNT_ADD = "CART_ITEM_COUNT_ADD";
export const CART_ITEM_COUNT_REMOVE = "CART_ITEM_COUNT_REMOVE";

const initialState = [];

const carts = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      return [...state, action.item];

    case CART_ITEM_REMOVE:
      // console.log(state);
      const newSt = state.splice(action.index, 1);
      return [...state];

    case CART_ITEM_COUNT_ADD:
      return state.map((item, index) => {
        if (index === action.index) {
          ++item.quantity;
        }
        return item;
      });

    case CART_ITEM_COUNT_REMOVE:
      return state.map((item, index) => {
        if (index === action.index) {
          item.quantity !== 0 ? --item.quantity : item.quantity;
        }
        return item;
      });



    default:
      return state;
  }

};

export default carts;
