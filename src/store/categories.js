import axios from 'axios';

const initialState = {
  categories: [
    { name: 'ELECTRONICS', displayName: 'Electronics' },
    { name: 'FOOD', displayName: 'Food' },
    { name: 'CLOTHING', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET':
      return {
        ...state,
        activeCategory: payload,
      };

    case 'GET':
      return payload;

    case 'RESET':
      return initialState;

    default:
      return state
  }
};

export const setCategories = (data) => {
  return {
    type: 'GET',
    payload:data,
  }
}

export const getCategories = () => async(dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  console.log('request results', response.data.results);
  dispatch(setCategories(response.data.results));
}

export default categoriesReducer;