import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {SearchOutlined, BellFilled,WechatOutlined   } from '@ant-design/icons';
import {  Modal  } from 'antd';


function Header (){
  const [visible, setVisivle] = useState(false)
  const showModal = () => {
    setVisivle({
      visible: true,
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
          <WechatOutlined/>
        </div>
       </div>
       <div>
        <Modal
            visible={visible}
            >
            <form className="search">
              <button type="submit"><SearchOutlined/></button>
              <input type="text" placeholder="Search.." name="search"/>
            </form>
        </Modal>
       </div>
   </div>
  
 )
}
export default Header