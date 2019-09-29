import React from 'react';
import './App.css';
import { Provider } from 'mobx-react'
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import Header from './containers/Header'
import Contain from './containers/VisaContent'
import RootStore from './stores/RootStore'
const { Footer, Content } = Layout;
const { Text } = Typography;
function App() {
  return (
    <div className="App" style={{background:'blueviolet'}}>
      {/* <Layout>
        <Header>Header</Header>
        <Content style={{minHeight: '80vh', backgroundColor: '#95b2f1'}}>
        <Row>
          <Col span={6}></Col>
          <Col span={12}><ImgSlide /></Col>
          <Col span={6}></Col>
        </Row>
          
        </Content>
        <Footer>Footer</Footer>
      </Layout> */}

      <Provider rootStore={new RootStore()}>
      <Layout style={{textAlign: "center"}}>
        <Header />
        <Content style={{minHeight: '80vh', backgroundColor: '#95b2f1'}}>
          <Contain />
        </Content>
        <Footer style={{minHeight: '10vh', backgroundColor: '#95b2f1', textAlign: "center"}}><Text underline>ALL FAKE VISA</Text></Footer>
      </Layout>
    </Provider>
    </div>
  );
}

export default App;
