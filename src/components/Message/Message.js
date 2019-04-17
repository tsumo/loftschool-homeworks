import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    render(props) {
        return (
            <span className="message" key={this.props.key}>
                {this.props.text}
            </span>
        );
    }
}

export default Message;

