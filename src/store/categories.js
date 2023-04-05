const initialState = {
  categories: [
    { name: 'ELECTRONICS', displayName: 'Electronics' },
    { name: 'FOOD', displayName: 'Food' },
    { name: 'CLOTHING', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        activeCategory: action.payload.name,
        products: initialState.products,
      };

      case 'FILTER_PRODUCTS':
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

export default categoriesReducer;