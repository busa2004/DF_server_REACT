import React, { Component } from 'react';
import { Input } from 'antd';
import './Option3Search.css';

const Search = Input.Search;

class Option4Search extends Component {

   
    render () {
          
         return (
            <div className="Option4Search" >
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
             />
          </div>
        );
    }
}
 export default Option4Search;