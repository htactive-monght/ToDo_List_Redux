import * as types from './../constants/ActionTypes'
export const addTodo = ()=>{
  return{
    type: types.ADD_TODO,
  }
}

export const deleteTodo = (id)=>{
  return{
    type: types.DELETE_TODO,
    id: id
  }
}

export const editTodo = (id)=>{
  console.log("action log", id);
  return{
    type: types.EDIT_TODO,
    id: id
  }
}

export const isChecked = (id, ischecks)=>{
  return{
    type: types.IS_CHECKED,
    payload: {
      id,
      ischecks
    }
  }
}


