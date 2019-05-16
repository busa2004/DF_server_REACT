import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Option6score from './Option6score';

class App extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div style={{marginLeft:"100%"}}>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         Some contents...
          <Option6score/>
        </Modal>
      </div>
    );
  }
}

class Option6modal extends Component {
    render() {
        return (
            <div >
               <App />
                </div>
        );
    }
}
 export default Option6modal;