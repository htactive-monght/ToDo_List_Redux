import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Showdata from './Showdata'
import Header from './header'
import {Tabs} from 'antd'
import { v1 as uuid } from 'uuid';
import {useDispatch } from 'react-redux';



function AddToDo (props){
  const dispatch = useDispatch();
  const [keyTab, setKeyTab] = useState("1")
  const { TabPane } = Tabs;
  const {todo} = props;
  const [todoList, setTodoList] = useState(todo)
  const [taskName, setTaskName] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if(taskName === "" || taskName.trim() === ''){
        alert("Your task name invalid")
      }else{
              const newColor = getRandomColor()
              dispatch({type:'ADD_TODO', newTodo:{id: uuid(), taskname: taskName.trim(),
              color: newColor, isUpdate: false, ischeck: false}})
              setTaskName("");
                }
    }
  }
  function handleDelete (id){
    dispatch({type:'DELETE_TODO',id: id})
  }
  
  const handleEdit =(index)=>{
    dispatch({type:'EDIT_TODO', id: index,
      tasknames:  todoList.find(value=>value.id === index).taskname
    })
  }
 
  const getRandomColor = ()=>{
    const color_list = ['green', 'red', 'blue', 'yellow','deeppink']
    const randomIndex = Math.trunc(Math.random()*5);
    return color_list[randomIndex]
  }

  const updateEdit = (index, value, name) => {
    const list = todoList.map((item, id) => {
      if (item.id === index) {
        return {...item, [name]: value }
      }
      return item
    })
    setTodoList(list);
  }

  const handleComple = () => {
    setTodoList(todo.filter(item => item.ischeck))
   }
   const handleUnComple = () => {
    setTodoList(todo.filter(item => !item.ischeck))
   }
   const handleAll = () => {
    setTodoList(todo)
   }

  function callback(key) {
   setKeyTab(key)
  }

  useEffect(() => {
    switch (keyTab) {
      case "1":
       handleAll();
        break;
      case "2":
       handleUnComple();
          break;
      case "3":
       handleComple();
           break;
      default:
       setTodoList(todo)
    }
   }, [todo])

return(
  <div>
    <div>
      <Header/>
    </div>
    <div className="divtask">
      <input type="text" placeholder="Type here for add a new todo" 
        value={taskName} 
        onChange={e=>setTaskName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      <div className="menu">
        <Tabs defaultActiveKey={keyTab} onChange={callback} type="card" >
          <TabPane tab={<a onClick={handleAll}>All</a>} key="1" ></TabPane>
          <TabPane tab={<a onClick={handleUnComple}>Uncompleted</a>} key="2"></TabPane>
          <TabPane tab={<a onClick={handleComple}>Completed</a>} key="3"></TabPane>
        </Tabs>
      </div>
    </div>
        {todoList.map((e, id) => 
         <Showdata
          item = {e} 
          index = {id} 
          handleDelete={handleDelete}
          handleEdit = {handleEdit}
          updateEdit = {updateEdit}
          key={id}
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
