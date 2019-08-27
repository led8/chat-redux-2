// External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import containers
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">???</div>
        <div className="channel-content">
          {this.props.messages.map(message => <Message key={message.author} author={message.author}
                                                        content={message.content} created_at={message.created_at} />)}
        </div>
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages,
  };
}

export default connect(mapReduxStateToProps, null)(MessageList);
