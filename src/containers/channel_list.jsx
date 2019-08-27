// External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import containers
import Channel from '../containers/channel';

class ChannelList extends Component {
  render() {
    return (
      <div className="channels-container">
        <span>{this.props.title}</span>
        <ul>
          {this.props.channels.map(channel => <Channel key={channel} name={channel} />)}
        </ul>
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    title: reduxState.title
  };
}

export default connect(mapReduxStateToProps, null)(ChannelList);
