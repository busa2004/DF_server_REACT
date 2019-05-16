import React, { Component } from 'react';
import { Input,Select,Button,Modal } from 'antd';
import Option8Timeline from './Option8Timeline';

const { Option, OptGroup } = Select;
const InputGroup = Input.Group;
function handleChange(value) {
  console.log(`selected ${value}`);
}

class Option6select extends Component {
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
            <div style={{textAlign:"right",width:"100%"}}>
              <InputGroup compact>
              <Button onClick={this.showModal}  className="up" style={{ textAlign:"left",width: '100px' }}>
              Version
              </Button>
              <Modal
                     title="Basic Modal"
                     visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}
                   ><Option8Timeline/></Modal>
                <Select
                 defaultValue="jack"
                 style={{ width: 200 }}
                 onChange={handleChange}
                                         >
                <OptGroup label="ver 2.xx">
                  <Option value="jack">v2.1</Option>
                  <Option value="lucy">v2.0</Option>
                 </OptGroup>
                 <OptGroup label="ver 1.xx">
                  <Option value="Yiminghe">v1.0</Option>
                  </OptGroup>
                 </Select>

                 </InputGroup>
                </div>
        );
    }
}
 export default Option6select;