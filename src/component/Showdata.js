import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {EditOutlined, CheckOutlined,   } from '@ant-design/icons';
import {isChecked} from './../action/Actions'

function Showdata(props){
  const {item, indexs, handleDelete, handleEdit, updateEdit, dispatch} = props;
  const textarea = useRef(null);

  function handleFocus(){
    textarea.current.focus()
  }

  return (
    <div>
      <div key={indexs}>
            <div className= "divTodo" style={{borderLeft: 3,borderLeftColor: item.color, borderLeftStyle: "solid"}}>
              <div> 
                <input type="checkbox" checked={item.ischeck} 
                  onChange={() => dispatch(isChecked(indexs, !item.ischeck))}
                  />
              </div>
              <div className="divTaskName">
                <textarea ref={textarea}  name="taskNameEdit" 
                  onChange={e=> updateEdit(indexs, e.target.value, 'taskname')}
                  value={item.taskname}
                  onClick={() => updateEdit(indexs, true, 'isUpdate')}
                />
              </div>
              <div className="divIcon">
                {item.isUpdate ? <CheckOutlined onClick={()=> {updateEdit(indexs, false, 'isUpdate');handleEdit(indexs);}}/>
                :  <EditOutlined  onClick={()=>{updateEdit(indexs, true, 'isUpdate'); handleFocus()}}/>}
              </div>
              <div className="divIcon">
                <button onClick={()=>handleDelete(indexs)}>x</button>
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