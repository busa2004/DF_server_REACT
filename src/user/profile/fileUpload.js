import React, { Component } from 'react';
import {
    Upload, message, Button, Icon,
  } from 'antd';
  

  class Uploader extends Component {
    constructor(props){
      super(props);
      this.state={
        fileName:null
      }
    }
     config = {
    
      name: 'file',
      action: 'http://218.39.221.101:8080/df/api/files',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    
    render() {
        return (
     <div className="Upload">
      <Upload {...this.config} onChange={info => this.props.onUpload(info.fileList)}>
       <Button>
        <Icon type="upload" /> 파일첨부
       </Button>
      </Upload>
     
            </div>
        );
    }
}
 export default Uploader;