import React from 'react'
import { observer, inject } from 'mobx-react'
import ImgSlide from '../component/ImgSlide'
import { Row, Col } from 'antd'
class VisaContent extends React.Component {
  render() {
    return (
      <Row>
        <Col span={6}></Col>
        <Col span={12}><ImgSlide /></Col>
        <Col span={6}></Col>
      </Row>
    )
  }
}

export default inject('rootStore') (observer(VisaContent))