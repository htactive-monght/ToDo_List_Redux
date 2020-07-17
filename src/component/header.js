import React, {useState} from 'react'
import {SearchOutlined, BellFilled,MessageFilled  } from '@ant-design/icons';
import {  Modal  } from 'antd';


function Header (){
  const [visible, setVisivle] = useState(false)

  const showModal = () => {
    setVisivle({
      visible: true,
    });
  };
  const handleOk = e => {
    console.log(e);
    setVisivle({
      visible: false,
    });
  };
 const handleCancel = e => {
    console.log(e);
    setVisivle({
      visible: false,
    });
  };
 return (
   <div>
      <div className="divHeaderMenu">
        <div className="headerIcon">
           <SearchOutlined onClick={showModal}/>
        </div>
        <div className="headerIcon">
          <BellFilled />
        </div>
        <div className="headerIcon">
          <MessageFilled/>
        </div>
       </div>
       <div>
        <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            >
            <input type="search" placeholder="Enter search text"/>
        </Modal>
       </div>
   </div>
  
 )
}
export default Header