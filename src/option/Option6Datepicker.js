import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';


class Option6DatePick extends Component {

   
  render () {
        
       return (
        <div  style={{width: '100%' }}>
        <RangePicker
          defaultValue={[moment( moment(), dateFormat), moment(moment(), dateFormat)]}
          format={dateFormat}
        />
      </div>
      );
  }
}
export default Option6DatePick;