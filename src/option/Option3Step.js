import React, { Component } from 'react';
import { Steps, Button} from 'antd';
import './Option3Step.css'
import Option3table from './Option3table';


const Step = Steps.Step;

const steps = [{
  title: '대기',
  content: <Option3table/>,
}, {
  title: '반려',
  content: <Option3table/>,
}, {
  title: '승인',
  content: <Option3table/>,
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  first(){
    const current = this.state.current - 2;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current} >
          {steps.map(item => <Step key={item.title} title={item.title} status={item.status} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button onClick={() => this.next()}>다음</Button>
          }
          {
            current === steps.length - 1
            && <Button  onClick={() => this.first()}>처음</Button>
          }
          {
            current > 0 && current < 2
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              뒤로
            </Button>
            )
          }
        </div>
      </div>
    );
  }
}

class Option3Step extends Component {

   
    render () {          
         return (
            <App />
        );
    }
}
 export default Option3Step;