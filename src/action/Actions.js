import * as types from './../constants/ActionTypes'
export const addTodo = ()=>{
  return{
    type: types.ADD_TODO,
  }
}
export const deleteTodo = (index)=>{
  return{
    type: types.DELETE_TODO,
    index: index
  }
}

export const editTodo = (index)=>{
  return{
    type: types.EDIT_TODO,
    index: index
  }
}


