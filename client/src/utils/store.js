//section

import { createStore } from 'redux'
import reducers from '../utils/reducers';

// console.log({ reducer });

let preloadedState;
const cars = [
  {
    id: 1,
    make: 'test1',
    model: 'Civic',
    year: '2008',
    isRunning: false,
  },
  {
    id: 2,
    make: 'test2',
    model: 'Y',
    year: '2021',
    isRunning: false,
  },
];

if (cars) {
  preloadedState = {
    cars: cars
  }
}

// export const store = createStore(reducer);
// export const store = createStore(reducer, preloadedState);
export const store = createStore(reducer, preloadedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

export default store;