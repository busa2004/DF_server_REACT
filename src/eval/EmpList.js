import React, { Component } from 'react';
import reqwest from 'reqwest';
import { List, message, Avatar, Spin, Input, Button } from 'antd';
import { BASE_URL, API_BASE_URL } from '../constants/index'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
import '../Component/ListComponent/ScrollList.css';

const Search = Input.Search;

class EmpList extends Component {
  constructor(props) {
    super(props);
    this.state={
      taskId: this.props.taskId
    }
    this.onClick = this.onClick.bind(this);
    console.log(this.state.taskId);
  }  
  state = {
    data: [],
    loading: false,
    hasMore: true,
    size: 'large',
    search: '',//this.props.search // search value
  }
  
  componentDidMount() {
    this.load();
  }

  // 사원 검색
  searchUser = (data) => {
    this.state.search = data
    this.load();
  }

  load = () => {
    this.fetchData((res) => {
      this.setState({
        data: res,
      });
    });
  }

  fetchData = (callback) => {
    reqwest({
      url: API_BASE_URL + "/usertask/get?taskId=" + this.state.taskId,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        console.log("fetchData");
        console.log(res);
        callback(res);
      },
    });
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 3) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  onClick = (e) => {    
    this.props.clickButton(e.target.value);
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    if (this.state.notFound) {
      return <NotFound />;
    }

    if (this.state.serverError) {
      return <ServerError />;
    }
    return (
      <div>
        <div>
          <Search
            defaultValue={this.state.search}
            placeholder="사원검색"
            onSearch={value => this.searchUser(value)}
            enterButton
          />
          <br /><br />
        </div>
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar icon="user" size={80} 
                    src={BASE_URL + "test/" + item.profile} />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description={item.email}
                  />
                  <div><Button value={item.id} onClick={this.onClick}>평가하기</Button></div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default EmpList;