const initialState = [
  { name: 'TV', category: 'ELECTRONICS', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'ELECTRONICS', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'CLOTHING', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'CLOTHING', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'FOOD', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'FOOD', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'FOOD', price: 2.39, inStock: 90 },
];

let tempState = [...initialState];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET':
      return initialState.filter(product => product.category === payload.name)

    case 'ADD':
      let activeCategory = payload.category;
      console.warn(activeCategory)

      tempState = tempState.map(product => product.name === payload.name ? {...product, inStock: product.inStock - 1} : product)

      let results = tempState.filter(product => product.category === activeCategory);
      console.log('is inventory correct for all categories?', tempState);
      console.log(results);

      return results;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default productsReducer;
