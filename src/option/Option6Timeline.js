import React, { Component } from 'react';
import { Timeline } from 'antd';



class Option6Timeline extends Component {
    render() {
        return (
            <div style={{width:"200px",height:"100px"}}>
                  <Timeline mode="left">
                    <Timeline.Item>v1.0 2018-10-20</Timeline.Item>
                    <Timeline.Item>v2.0 2019-01-01</Timeline.Item>
                    <Timeline.Item>v2.1 2019-05-01</Timeline.Item>
                 </Timeline>
            </div>
        );
    }
}
 export default Option6Timeline;