import React, { Component } from 'react';
import { Radio} from 'antd';

class Button3 extends React.Component {

  render() {
    return (
      <div style={{marginLeft:"5px"}}>
        <Radio.Group  onChange={this.handleSizeChange}>
          <Radio.Button value="month">월간</Radio.Button>
          <Radio.Button value="quarter">분기</Radio.Button>
          <Radio.Button value="half">반기</Radio.Button>
          <Radio.Button value="year">년</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}


class Option7Button extends Component {
    render() {
        return (
            <div>
               <Button3 />
                </div>
        );
    }
}
 export default Option7Button;