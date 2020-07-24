
import reducerTodo from './reducers/RDTodo';
const redux = require('redux');


const store = redux.createStore(
  reducerTodo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

 
export default store;


