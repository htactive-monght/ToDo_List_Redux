import * as types from './../constants/ActionTypes'
const todo = {
  todolist: []
}
const reducerTodo = (state = todo, action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return{
        ...state, todolist:[...state.todolist, action.newTodo]
      }
      case 'DELETE_TODO':
        return{
          ...state, todolist:state.todolist.filter((value, index)=> value.id !== action.id)
        }
      case 'EDIT_TODO':
        console.log("log trong reduce", action.tasknames);
        return{
          ...state, todolist: state.todolist.map(    
            (item, index) => item.id === action.id ? {...item, taskname : action.tasknames}: item)
          }
      case types.IS_CHECKED:
        const {payload} = action
        return{
          ...state, todolist: state.todolist.map(    
            (item, index) => item.id === payload.id ?
            {...item, ischeck : payload.ischecks}:  item)}
       default: return state;     
  }

}
export default reducerTodo;