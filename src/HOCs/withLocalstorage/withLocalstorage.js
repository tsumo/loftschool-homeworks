import React, { Component } from 'react';
import { load, save } from '../../localstorage';

function withLocalstorage(WrappedComponent) {
  return class extends Component {
    render() {
      const loadItems = () => {
        let items = load('items');
        return items === null ? [] : items;
      };

      const saveItem = item => {
        let items = loadItems();
        save('items', [
          {
            id: items.length + 1,
            isComplete: false,
            text: item
          },
          ...items
        ]);
      };

      const toggleItem = itemId => {
        let items = loadItems().map(item => {
          if (item.id === itemId) {
            item.isComplete = !item.isComplete;
          }
          return item;
        });
        save('items', items);
      };

      return (
        <WrappedComponent
          {...this.props}
          load={load}
          save={save}
          saveItem={saveItem}
          loadItems={loadItems}
          toggleItem={toggleItem}
        />
      );
    }
  };
}

export default withLocalstorage;
