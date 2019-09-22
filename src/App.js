import React from 'react';
import './App.css';
import ImgSlide from './component/ImgSlide'
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div className="App" style={{background:'blueviolet'}}>
      <Layout>
        <Header>Header</Header>
        <Content style={{minHeight: '80vh', backgroundColor: '#95b2f1'}}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}><ImgSlide /></Col>
          <Col span={8}></Col>
        </Row>
          
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
