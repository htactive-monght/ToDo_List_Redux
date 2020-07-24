import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {EditOutlined, CheckOutlined, CloseOutlined  } from '@ant-design/icons';
import {isChecked} from './../action/Actions'

function Showdata(props){
  const {item, index, handleDelete, handleEdit, updateEdit, dispatch} = props;
  const textarea = useRef(null);

  function handleFocus(){
    textarea.current.focus()
  }

  return (
    <div>
      <div key={index}>
            <div className= "divTodo" style={{borderLeft: 3,borderLeftColor: item.color, borderLeftStyle: "solid"}}>
              <div> 
                <input type="checkbox" checked={item.ischeck} 
                  onChange={() => dispatch(isChecked(item.id, !item.ischeck)) }
                  />
              </div>
              <div className="divTaskName">
                <textarea ref={textarea}  name="taskNameEdit" 
                  onChange={e=> updateEdit(item.id, e.target.value, 'taskname')}
                  value={item.taskname}
                  onClick={() => updateEdit(item.id, true, 'isUpdate')}
                />
              </div>
              <div className="divIcon">
                {item.isUpdate ? <CheckOutlined onClick={()=> {updateEdit(item.id, false, 'isUpdate');handleEdit(item.id);}}/>
                :  <EditOutlined  onClick={()=>{updateEdit(item.id, true, 'isUpdate'); handleFocus()}}/>}
              </div>
              <div className="divIcon">
                <CloseOutlined  onClick={()=>handleDelete(item.id)}/>
              </div>
            </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todo: state.todolist
  }
}
export default connect(mapStateToProps)(Showdata);