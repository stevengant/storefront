const initialState = [
  { name: 'TV', category: 'ELECTRONICS', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'ELECTRONICS', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'CLOTHING', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'CLOTHING', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'FOOD', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'FOOD', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'FOOD', price: 2.39, inStock: 90 },
];

const tempState = [...initialState];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
      return initialState.filter(product => product.category === action.payload.name)

    case 'ADD':
      let activeCategory = action.payload.category;

      tempState = tempState.map(product => product.name === action.payload.name ? {...product, inStock: product.inStock - 1} : product);
      
      let results = tempState.filter(product => product.category === activeCategory);

      return results;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default productsReducer;
