import * as types from './../constants/ActionTypes'
const todo = {
  todolist: [{
    taskname: "Id velit est aliquid ut voluptas eligendi numquam",
    color: "green",
    isUpdate: false,
    ischeck: false
  }]
}
const reducerTodo = (state = todo, action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return{
        ...state, todolist:[...state.todolist, action.newTodo]
      }
      case 'DELETE_TODO':
        return{
          ...state, todolist:state.todolist.filter((value, index)=> index !== action.index)
        }
      case 'EDIT_TODO':
        console.log("log trong reduce", action.tasknames);
        return{
          ...state, todolist: state.todolist.map(    
            (item, index) => index === action.index ? {...item, taskname : action.tasknames}: item)}
      case types.IS_CHECKED:
        const {payload} = action
        return{
          ...state, todolist: state.todolist.map(    
            (item, index) => index === payload.index ?
            {...item, ischeck : payload.ischecks}:  item)}
       default: return state;     
  }

}
export default reducerTodo;