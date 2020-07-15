
import reducerTodo from './reducers/RDTodo';
const redux = require('redux');


const store = redux.createStore(reducerTodo);

console.log("store này nó log cái qq chi ", store.getState());
 
store.subscribe(()=> console.log(JSON.stringify(store.getState()))
)
export default store;


