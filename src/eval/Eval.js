import React, { Component } from 'react';
import { Button, Card, Modal } from 'antd';

import { getUserByTaskNo, getAllTask } from '../util/APIUtils';
import EmpList from './EmpList';
import EvalModal from './EvalModal';
import TmpTeskSearch from './TmpTeskSearch';

import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';


// 업무리스트component 기반으로 만들어진 component
class Eval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      }, {
        title: 'content',
        dataIndex: 'content',
        key: 'content'
      }],

      value: { status: 'PROGRESS'},
      visible: false,
      empNo: 0, // 평가할 사원의 id
      taskId: 0,
      users: null,
      datas: null
    }

    var d = new Date();
    this.state.value.search = '';
    this.state.value.from = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    this.state.value.to = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate() + 1);
    console.log(this.state.value);
  }

  // DatePicker
  search = (data) => {
    this.state.value.search = data;
    this.load();
  }

  dateSearch = (dateSearch) => {
    this.setState({
      taskId: 0,
      users: null
    })
    this.state.value.from = dateSearch[0];
    this.state.value.to = dateSearch[1];
    this.load();
  }

  load = () => {
    this.setState({
      isLoading: true,
    });
    getAllTask(this.state.value)
      .then(response => {
        this.setState({
          datas: response,
          isLoading: false
        });
      }).catch(error => {
        if (error.status === 404) {
          this.setState({
            notFound: true,
            isLoading: false
          });
        } else {
          this.setState({
            serverError: true,
            isLoading: false
          });
        }
      });
  }
  
  // 날짜 선택하고 task list를 가져올 때 평가하기 버튼 추가 삽입
  componentWillMount() {
    this.setState({
      columns: this.state.columns.concat({
          title: 'Evaluation',
          dataIndex: 'id',
          key: 'id',          
          render: (text) => {
            let getUser = () => {
              this.getUser(text);
            }
            return <Button onClick={getUser}>평가</Button>
          }
      })
    });
    this.load();
  }

  getUser = (childTaskId) => {
    this.setState({
      isLoading: true,
    });
    getUserByTaskNo(childTaskId)
      .then(response => {
        this.setState({
          isLoading: false,
          users: response,
          taskId: childTaskId
        });
        console.log(this.state.users);
        console.log("taskId" + this.state.taskId);
      })
      .catch(error => {
        if (error.status === 404) {
          this.setState({
            notFound: true,
            isLoading: false
          });
        } else {
          this.setState({
            serverError: true,
            isLoading: false
          });
        }
      });
  }
  
  // 사원 선택하고나서 평가하기..
  clickButton = (childEmpNo) => {
    console.log(childEmpNo); // 평가할 사원의 no
    this.setState({
      empNo: childEmpNo,
      visible: true
    });
  }

  // modal
  handleOk = () => {
    console.log("Eval.js >> handleOk()");
    this.setState({
      visible: false
    });
  }

  handleCancel = () => {
    console.log("Eval.js >> handleCancel()");
    this.setState({
      visible: false
    });
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
        <Card title='평가하기'>
          <TmpTeskSearch
            value={this.state.value}
            dateSearch={this.dateSearch}
            getUser={this.getUser}
            data={this.state.datas}
            colums={this.state.columns}/>
          
          <br/> <br/>

          <EmpList 
            taskId={this.state.taskId} 
            clickButton={this.clickButton} />
          <Modal title="평가하기" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <div>
              {/* 평가 component */}
              <EvalModal />
            </div>            
          </Modal>
        </Card>
      </div>
    );
  }
}
export default Eval;