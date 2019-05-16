import React, { Component } from 'react';
import { Input } from 'antd';
import './Option6Search.css';

const Search = Input.Search;

class Option6Search extends Component {

   
    render () {
          
         return (
            <div className="Option6Search" >
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
             />
          </div>
        );
    }
}
 export default Option6Search;