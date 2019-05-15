import { Select } from 'antd';
import React, { Component } from 'react';
const Option = Select.Option;


class Selecter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTask: this.props.userTask

    };
    console.log(this.state.userTask)
  };
  

  onBlur = () =>{
    console.log('blur');
  }
  onFocus = () => {
    console.log('focus');
  }
  onSearch = (val) => {
    console.log('search:', val);
  }


  
  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="업무 선택"
        optionFilterProp="children"
        onChange={value => this.props.onUserTaskChange(value)}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
            {this.state.userTask.map((contact, i) => {
      return ( <Option value={contact.id}>{contact.title}</Option>);
    })}
      </Select>
    )
  }

}

export default Selecter;