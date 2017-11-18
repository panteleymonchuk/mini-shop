// Set title
export const PRODUCT_LIST_REQ = 'PRODUCT_LIST_REQ';
export const PRODUCT_LIST_GOT = 'PRODUCT_LIST_GOT';
export const PRODUCT_LIST_ERR = 'PRODUCT_LIST_ERR';

const initialState = [
  {
    id: 1,
    name: 'product name 1',
    price: 50
  }, {
    id: 2,
    name: 'product name 2',
    price: 30
  }, {
    id: 3,
    name: 'product name 3',
    price: 20
  },
];

const AppReducers = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_GOT:
      return Object.assign({}, state, {
        title: action.title
      });

    default:
      return state;
  }
};

export default AppReducers;
