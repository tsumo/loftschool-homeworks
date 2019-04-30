import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const conveyor = ["clients", "conveyor_1", "conveyor_2", "conveyor_3", "conveyor_4"]

export const orders = [];

export default (state = orders, action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = action.payload;
      return [
        ...state,
        {
          id, recipe,
          ingredients: [],
          position: "clients"
        }
      ]
    case MOVE_ORDER_NEXT:
      return [
        ...state,
        changePosition(state, action, 1)
      ]
    case MOVE_ORDER_BACK:
      return [
        ...state,
        changePosition(state, action, -1)
      ]
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);


const changePosition = (state, action, vector) => {
  return state.map(order => {
    if (order.id == action.payload) {
      order.position = conveyor[conveyor.indexOf(order.position) + vector]
    }
  })
};
