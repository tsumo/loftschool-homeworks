import React, { PureComponent } from 'react';
import './Todo.css';
import Card from '../Card';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  updateParent = () => {
    this.forceUpdate();
  };

  handleClick = (itemId) => {
    this.props.toggleItem(itemId)
    this.forceUpdate();
  }

  render() {
    return (
      <Card title="Список дел" updateParent={this.updateParent}>
        {this.props.loadItems().map(item => {
          return (
            <div key={item.id} className="todo-item t-todo">
              <p className="todo-item__text">{item.text}</p>
              <span
                className="todo-item__flag t-todo-complete-flag"
                data-todo-id={item.id}
                onClick={this.handleClick.bind(null, item.id)}
              >
                [{item.isComplete ? 'x' : ' '}]
              </span>
            </div>
          );
        })}
      </Card>
    );
  }
}

export default withLocalstorage(Todo);
