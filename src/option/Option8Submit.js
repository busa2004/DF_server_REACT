import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class Option8Submit extends Component {
    render() {
        return (
            <div style={{marginTop:"10px"}}>
            <Search
              placeholder="Version 정보"
              enterButton="확인"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        );
    }
}
 export default Option8Submit;