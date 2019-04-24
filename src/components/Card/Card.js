import React, { PureComponent } from 'react';
import './Card.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Card extends PureComponent {
  state = {
    inputText: ''
  };

  changeText = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  handleClick = () => {
    if (this.state.inputText !== '') {
      this.props.saveItem(this.state.inputText);
      this.setState({ inputText: '' });
      this.props.updateParent();
    }
  };

  handleKey = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className="card">
        <h3 className="card__title card-title">{title}</h3>
        <div className="card-scrollable-content">
          <div className="todo t-todo-list">
            <div className="todo-item todo-item-new">
              <input
                className="todo-input t-input"
                value={this.state.inputText}
                placeholder="Введите задачу"
                onChange={this.changeText}
                onKeyDown={this.handleKey}
              />
              <span className="plus t-plus" onClick={this.handleClick}>
                +
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalstorage(Card);
