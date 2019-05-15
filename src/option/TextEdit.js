import React, { Component } from 'react';
import {
    Button
} from 'antd';
import Selecter from '../WriteComponent/selecter'
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import { createTask, createReport, getUserTaskDate } from '../util/APIUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import ServerError from '../common/ServerError';
import NotFound from '../common/NotFound';
import { message } from 'antd';
import {
    Input, Select
} from 'antd';
import { html, html2, html3 } from './html';
const Option = Select.Option;
const InputGroup = Input.Group;
const error = () => {
    message.error('제목과 내용을 입력해야 합니다.');
};

class TextEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ok: null,
            isLoading: false,
            content: '',
            title: '',
            userTask: null,
            router: this.props.router
        };
        this.onClick = this.onClick.bind(this);
        this.loadCreateTask = this.loadCreateTask.bind(this);
        this.loadUserTask = this.loadUserTask.bind(this);
    };
    success = () => {
        message.success('새로운 업무를 등록하였습니다.');
    };
    loadCreateTask(task) {
        this.setState({
            isLoading: true
        });
        if (this.state.router == 'task') {
            createTask(task)
                .then(response => {
                    this.setState({
                        ok: response,
                        isLoading: false
                    });
                    this.success();
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
        } else if (this.state.router == 'report') {
            createReport(task)
                .then(response => {
                    this.setState({
                        ok: response,
                        isLoading: false,
                    });
                    this.success();
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
    }
    loadUserTask() {
        this.setState({
            isLoading: true
        });
        getUserTaskDate()
            .then(response => {
                this.setState({
                    userTask: response,
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
    onUserTaskChange = (value) => {
        this.setState({
            userTaskId: value
        })
        console.log(`selected ${value}`);
    }
    componentWillMount() {
        if (this.state.router == 'report') {
            this.loadUserTask()
        }
    };


    onClick() {
        if (this.state.content == '' || this.state.title == '') {
            error();
        } else {
            const task = { content: '', title: '' };

            task.content = this.state.content;
            task.title = this.state.title;

            if (this.state.router == 'report') {
                task.userTaskId = this.state.userTaskId;
            }
            this.loadCreateTask(task);
        }
    };
    onChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value
        });
    }
    updateContent = (value) => {
        this.setState({ content: value })
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        width: '100%',
       
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

                {this.state.router == 'report' ?
                    <div className="information" >
                        <Selecter onUserTaskChange={this.onUserTaskChange} userTask={this.state.userTask} />
                        <p></p>
                        <InputGroup compact>

                            <Select defaultValue="보고서 선택" style={{ width: '20%' }} onChange={this.updateContent}>
                                <Option value={html()}>일일 보고서</Option>
                                <Option value={html2()}>주간 보고서</Option>
                                <Option value={html3()}>월간 보고서</Option>
                            </Select>
                            <Input title={'title'} value={this.state.title} style={{ width: '65%' }} placeholder="제목" onChange={this.onChange} />
                        </InputGroup>
                    </div> :
                    <Input title={'title'} value={this.state.title} style={{ width: '65%' }} placeholder="제목" onChange={this.onChange} />
                }
                <JoditEditor
                    editorRef={this.setRef}
                    value={this.state.content}
                    config={this.config}
                    onChange={this.updateContent}
                />
                <div className='submit'>
                    <Button onClick={this.onClick}>등록하기</Button>
                </div>

            </div>
        );
    };

};



export default TextEdit;