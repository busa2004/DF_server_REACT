import TabForm from '../ListAndSearchUi/userTaskTab';
import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import InfiniteListExample from '../ListAndSearchUi/ScrollList';

import SelectList from '../ListAndSearchUi/SelectList';
import { getSelectTask,createUserTask,deleteUserTask } from '../util/APIUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
import { Modal, Button } from 'antd';
class Option8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
            isLoading: false,
            userId:null,
            ok:null,
            search:'',
            taskIds:[],
            taskSearch:''
           
        }
        this.loadTask = this.loadTask.bind(this);
        this.loadCreateUserTask = this.loadCreateUserTask.bind(this);
    }
    deleteUserTaskButton = (record) => {

     console.log(record)
      
      
     
  }
  searchTask = (data) =>{
    let search ={};
    this.setState({
      taskSearch : data
    });
    search.search = data;
    search.userId = this.state.userId;
    console.log(this.state.userId);
    console.log(search)
    this.loadTask(search)
  }
    clickButton = (data,search) => {
        let userId={userId:data}
        this.loadTask(userId)
        this.setState({
            userId:data,
            search:search
        })
        console.log('--'+this.state.userId)
       
    }
    createAndDeleteButton = (data,order,time) => {
      // 여기까지 했음 
      //  this.createUserTask(data) 이거 구현
    
      let userTask={};
      userTask.userId = this.state.userId;
      
      for(let i = 0 ;  i < data.length; i++){
       this.state.taskIds.push(data[i].id);
      }
      userTask.taskIds =  this.state.taskIds;
      this.setState({
        taskIds:[]
      })
      if(order=='create'){
      userTask.startDate=time[0];
      userTask.endDate=time[1];
      this.loadCreateUserTask(userTask);
      }
      else{
        this.loadDeleteUserTask(userTask);
      }
    }



    loadTask(data) {
        this.setState({
            isLoading: true
        });
      
        getSelectTask(data)
        .then(response => {
            this.setState({
              tasks: response,
                isLoading: false
                
              });
  
        }).catch(error => {
            if(error.status === 404) {
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

      loadCreateUserTask(data) {
        this.setState({
            isLoading: true
          
        });
      
        createUserTask(data)
        .then(response => {
          let userId = {userId:this.state.userId}
          this.loadTask(userId);
            this.setState({
                ok:response,
                
  
              });
              console.log(this.state.ok)
        }).catch(error => {
            if(error.status === 404) {
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

      loadDeleteUserTask(data) {
        this.setState({
            isLoading: true
          
        });
      
        deleteUserTask(data)
        .then(response => {
          let userId = {userId:this.state.userId}
          this.loadTask(userId);
            this.setState({
                ok:response,
               
  
              });
              console.log(this.state.ok)
        }).catch(error => {
            if(error.status === 404) {
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


    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />;
          }
          
          if(this.state.notFound) {
            return <NotFound />;
          }
          
          if(this.state.serverError) {
            return <ServerError />;
          }
          console.log(this.state.tasks);
        return (

            <div>

                <div>
                  
                    <Row>
                        <Col span={11}><InfiniteListExample  
                        search ={this.state.search}
                        clickButton={this.clickButton} /></Col>
                        <Col span={2}></Col>
                         <Col span={11}><SelectList searchTask={this.searchTask} tasks={this.state.tasks}
                         createAndDeleteButton={this.createAndDeleteButton}
                         userId={this.state.userId}
                         taskSearch={this.state.taskSearch}/></Col> 
                       
                    </Row>
                    


                </div>

            </div>
        );
    }
}
export default Option8;