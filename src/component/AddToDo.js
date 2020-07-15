/* eslint-disable no-sequences */
import React,{useState, useEffect,useRef} from 'react'
import {connect} from 'react-redux'
import Menu from './Menu'
import {DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';


function AddToDo (props){
  const {todo} = props;
  const [todoList, setTodoList] = useState(todo)
  const [taskName, setTaskName] = useState('');
  // const [taskNameEdit, setTaskNameEdit] = useState('');
  const textarea = useRef(null);
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
        color: newColor, isUpdate: false}})
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
    dispatch({type:'EDIT_TODO', index: index, tasknames:{
      taskname: todoList
    }})
  }
  function handleFocus(){
    textarea.current.focus()
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

 
return(
  <div>
    <div className="divtask">
      <input type="text" placeholder="Type here for add a new todo" 
        value={taskName} 
        onChange={e=>setTaskName(e.target.value)}
        onKeyDown={handleKeyDown}/>
    </div>
    <div>
      <Menu/>
    </div>
        {todoList.map((e, index) => <div key={index}>
          <div className= "divTodo" style={{borderLeft: 3,borderLeftColor: e.color, borderLeftStyle: "solid"}}>
            <div> 
              <input type="checkbox"/>
            </div>
            <div className="divTaskName">
              <textarea ref={textarea}  name="taskNameEdit" 
                onChange={e=> updateEdit(index, e.target.value, 'taskname')}
                value={todoList[index].taskname}
                onClick={() => updateEdit(index, true, 'isUpdate')}
              />
            </div>
            <div className="divIcon">
              {e.isUpdate ? <CheckOutlined onClick={()=> {updateEdit(index, false, 'isUpdate');handleEdit(index)}}/>
               :  <EditOutlined  onClick={()=>{updateEdit(index, true, 'isUpdate'); handleFocus();}}/>}
            </div>
            <div className="divIcon">
              <DeleteOutlined onClick={()=>handleDelete(index)}/>
            </div>
          </div>
        </div>)}
  </div>
)
}

const mapStateToProps = (state) => {
  return {
    todo: state.todolist
  }
}
export default connect(mapStateToProps)(AddToDo);
