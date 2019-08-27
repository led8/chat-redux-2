// External modules
import React, { Component } from 'react';

class Channel extends Component {
  render() {
    return (
      <li>
        # {this.props.name}
      </li>
    )
  }
}

export default Channel;
