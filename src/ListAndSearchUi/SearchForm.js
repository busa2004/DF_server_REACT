import { Input } from 'antd';
import React, { Component } from 'react';
const Search = Input.Search;

class SearchForm extends Component {
    
    render() {
       
        return (
            <div style={{width:"90%",marginLeft:"10px"}}>
                <Search
                    placeholder="input search text"
                    onSearch={value =>  this.props.search(value)}
                    defaultValue={this.props.value}
                />
               
            </div>
        );
    }
}
export default SearchForm;