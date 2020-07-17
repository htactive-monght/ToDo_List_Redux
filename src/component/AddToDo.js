import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Showdata from './Showdata'
import Header from './header'

function AddToDo (props){
  const {todo} = props;
  const [todoList, setTodoList] = useState(todo)
  const [taskName, setTaskName] = useState('');
  
  useEffect(() => {
    setTodoList(todo)
  }, [todo])

  const handleKeyDown = (e) => {
    const {dispatch} = props;
    if (e.key === 'Enter') {
      if(taskName ===""){
        alert("Can you enter your name")
      }else{
        const newColor = getRandomColor()
        dispatch({type:'ADD_TODO', newTodo:{taskname: taskName,
        color: newColor, isUpdate: false, ischeck: false}})
        setTaskName("");
      }
    }
  }
  function handleDelete (index){
    const {dispatch} = props;
    dispatch({type:'DELETE_TODO',index: index})
  }
  
  const handleEdit =(index)=>{
    const {dispatch} = props;
    dispatch({type:'EDIT_TODO', index: index,
      tasknames:  todoList[index].taskname
    })
  }
 
  const getRandomColor = ()=>{
    const color_list = ['green', 'red', 'blue', 'yellow','deeppink']
    const randomIndex = Math.trunc(Math.random()*5);
    return color_list[randomIndex]
  }

  const updateEdit = (index, value, name) => {
    const list = todoList.map((item, id) => {
      if (index === id) {
        return {...item, [name]: value }
      }
      return item
    })
    setTodoList(list);
  }
  const handleComple = () => {
    setTodoList(todo.filter(item => item.ischeck === true))
   }
   const handleUnComple = () => {
    setTodoList(todo.filter(item => item.ischeck === false))
   }
   const handleAll = () => {
    setTodoList(todo)
   }
return(
  <div>
    <div>
      <Header/>
    </div>
    <div className="divtask">
      <input type="text" placeholder="Type here for add a new todo" 
        value={taskName} 
        onChange={e=>setTaskName(e.target.value)}
        onKeyDown={handleKeyDown}/>
     <div className="menu">
        <a onClick={handleAll}>All</a>
        <a onClick={handleUnComple}>Uncompleted</a>
        <a onClick={handleComple}>Completed</a>
     </div>

    </div>
        {todoList.map((e, index) => 
         <Showdata
         item = {e} 
         indexs = {index} 
         handleDelete={handleDelete}
         handleEdit = {handleEdit}
         updateEdit = {updateEdit}
         key={index}
        />
        )}
  </div>
)
}

const mapStateToProps = (state) => {
  return {
    todo: state.todolist
  }
}
export default connect(mapStateToProps)(AddToDo);
