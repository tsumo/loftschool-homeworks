import React, { Component } from 'react';
import Message from 'components/Message/index.js';
import './Chat.css';

class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    }

    messagesEnd = React.createRef();

    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((el, index) => (
                            <Message key={index} text={el.text}></Message>
                        ))}
                        <div ref={this.messagesEnd}></div>
                    </div>
                </div>
                <input
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}>
                </input>
            </div>
        );
    }

    componentDidUpdate() {
        if (this.state.messageInput === '') {
            this.messagesEnd.current.scrollIntoView();
        }
    }

    changeInputMessage = (e) => {
        this.setState({ messageInput: e.target.value });
    }

    sendMessageOnEnter = (e) => {
        let message = this.state.messageInput;
        if (e.key === 'Enter' && message !== '') {
            this.setState({
                messages: [...this.state.messages, {text: message}],
                messageInput: ''
            })
        }
    }
}

export default Chat;

