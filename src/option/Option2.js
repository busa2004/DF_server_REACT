import React, { Component } from 'react';
import TextEdit from './TextEdit';
import {Card} from 'antd';
import './edit.css'
class Option2 extends Component {
    render() {
        return (
                <Card headStyle={{backgroundColor:"#00B1B6",color:"#FBFBFB",fontWeight:"bold"}}
                 title='보고서등록'>
                <div className='edit'>
                <TextEdit router={'report'}/>
                </div>
                </Card>
        );
    }
}
 export default Option2;