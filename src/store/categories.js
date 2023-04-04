let initialState = {
  categories: [
    { name: 'ELECTRONICS', displayName: 'Electronics' },
    { name: 'FOOD', displayName: 'Food' },
    { name: 'CLOTHING', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'ELECTRONICS', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'ELECTRONICS', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'CLOTHING', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'CLOTHING', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'FOOD', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'FOOD', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'FOOD', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name,
        products: initialState.products,
      };
      case 'SET':
        return {
          ...state,
        products: state.products.filter((item) => item.category === state.activeCategory),
        };
    case 'RESET':
      return initialState;
    default:
      return state
  }
}

//actions
export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
}

export const filterProducts = () => {
  return {
    type: 'SET',
    payload: {},
  };
}

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
}

export default categoriesReducer;