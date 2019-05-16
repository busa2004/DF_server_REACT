import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';


class Option8Timeline extends Component {
    render() {
        return (
            <div>
               <Timeline mode="alternate" reverse="reverse">
                 <Timeline.Item>Make v1.0 2018-09-01</Timeline.Item>
                 <Timeline.Item color="green">Update v1.1 2018-10-01</Timeline.Item>
                 <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Update v2.0 2018-12-01</Timeline.Item>
                 <Timeline.Item color="green">Update v2.1 2019-01-01</Timeline.Item>
                 <Timeline.Item color="green">Update v2.2 2019-03-01</Timeline.Item>
                 <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>...now</Timeline.Item>
                 </Timeline>
                </div>
        );
    }
}
 export default Option8Timeline;