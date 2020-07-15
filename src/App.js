import React from 'react';
import Sider from './component/Sider'
import AddTodo from './component/AddToDo'
import { Row, Col } from 'antd';

function App() {
  return (
    <div>
      <Row>
        <Col span={5}> <Sider/></Col>
        <Col span={17}><AddTodo/></Col>
      </Row>
    
    </div>
  );
}

export default App;
