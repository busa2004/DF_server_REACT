import React, { Component } from 'react';
import { Collapse } from 'antd';
import Option6score from './Option6score';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Option6panel extends Component {

    render() {
      return (
        <Collapse onChange={callback}>
        <Panel header="업무1" key="1">
          <Collapse defaultActiveKey="2">
            <Panel header="하성준" key="1">
              <Option6score/>
            </Panel>
          </Collapse>
          <Collapse defaultActiveKey="2">
            <Panel header="하성준2" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      );
    }
  }

export default Option6panel;