import React from 'react';

export default class extends React.Component {
  render() {
    return <ul>{this.props.children}</ul>
  }
}