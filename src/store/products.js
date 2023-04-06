import axios from 'axios';

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

      tempState = tempState.map(product => product.name === payload.name ? { ...product, inStock: product.inStock - 1 } : product)

      let results = tempState.filter(product => product.category === activeCategory);

        return results;

    case 'GET':
      return payload;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const setProducts = (data) => {
  return {
    type: 'GET',
    payload: data,
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  console.log('request results', response.data.results);
  dispatch(setProducts(response.data.results));
}

export default productsReducer;
