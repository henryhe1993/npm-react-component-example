import React from 'react';
import Ul from './ul';
import Li from './li';

export default class extends React.Component {
  render() {
    return (
      <div>
        <span>react npm publish add some npmignore</span>
        <Ul>
          { Array(20).fill(100).map((item, index) => <Li key={index} text={this.props.text}></Li>) }
        </Ul>
      </div>
    );
  }
}