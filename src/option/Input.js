import React, { Component } from 'react';
import {
    Input, Select, Button, Modal, Radio
 } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const radioStyle = {
    display: 'block',
    height: '40px',
    lineHeight: '40px',
  };
class Option2Input extends Component {
    state = { value: '',
             visible: false 
            }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }

    handleOk = (e) => {
      this.setState({  
        visible: false,
      });
    }

    handleCancel = (e) => {
      this.setState({
        value: '',
        visible: false,
      });
    }
     
    
    render() {
        return (
     <div className="information" >
        <div style={{marginBottom:'5px'}}>
        <InputGroup compact>
          <Input  className="up" value="업무선택" style={{ width: '20%',cursor:'default'}} readOnly/>
          <Input style={{ width: '70%' }} autoComplete="off" placeholder="업무" value={this.state.value} />
          <Button icon="search" style={{ width: '10%' }} onClick={this.showModal} ></Button>
          <Modal
          title="업무선택하기"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
        <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={'호우'}>호우</Radio>
        <Radio style={radioStyle} value={'쮓'}>쮓</Radio>
        <Radio style={radioStyle} value={'찌아쓰'}>찌아쓰</Radio>
          </RadioGroup>
        </Modal>
        </InputGroup>
        </div>
        <InputGroup compact>
          <Select defaultValue="일일" style={{ width: '20%' }}>
            <Option value="일일">일일 보고서</Option>
            <Option value="주간">주간 보고서</Option>
            <Option value="월간">월간 보고서</Option>
          </Select>
          <Input style={{ width: '65%' }} autoComplete="off" placeholder="제목" />
          <Select style={{ width: '15%' }} placeholder="결제선 지정">
            <Option value="팀장">팀장</Option>
          </Select>
        </InputGroup>
    </div>
        );
    }
}
 export default Option2Input;