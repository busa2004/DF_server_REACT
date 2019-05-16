import React, { Component } from 'react';
import { Input } from 'antd';
import './Option3Search.css';

const Search = Input.Search;

class Option3Search extends Component {

   
    render () {
          
         return (
            <div className="Option3Search" >
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
             />
          </div>
        );
    }
}
 export default Option3Search;