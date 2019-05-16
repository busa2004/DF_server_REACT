import React, { Component } from 'react';
import { Modal, Button ,Input} from 'antd';


const { TextArea } = Input;

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
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.title}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          cancelText={"반려"}
          okText={"승락"}
          cancelButtonProps={{type:"danger"}}
          onOk={this.handleOk}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <br/>
          반려사유작성란
          <TextArea rows={4} />
        </Modal>
      </div>
    );
  }
}

class Option4modal extends Component {
    render() {
        return (
            <div>
                <App title={this.props.title} />
            </div>
        );
    }
}
 export default Option4modal;