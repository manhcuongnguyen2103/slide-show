import React from 'react'
import { observer, inject } from 'mobx-react'
import { PageHeader } from 'antd';

class Header extends React.Component {
  render() {
    const { rootStore } = this.props
    return (
      <h4> -=THE FAKE VISA=- </h4>
    )
  }
}

export default inject('rootStore') (observer(Header))