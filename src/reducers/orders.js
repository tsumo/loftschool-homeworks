import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = action.payload;
      return [
        ...state,
        {
          id,
          recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    case MOVE_ORDER_NEXT:
      return changePosition(state, action.payload, 1);
    case MOVE_ORDER_BACK:
      return changePosition(state, action.payload, -1);
    case ADD_INGREDIENT:
      const { from, ingredient } = action.payload;
      const orders = getOrdersFor({ orders: state }, from);
      if (orders.length === 0) {
        return state;
      }
      return state.map(order => {
        return order.id === orders[0].id
          ? addIngredient(order, ingredient)
          : order;
      });
    default:
      return state;
  }
};

const conveyor = [
  'clients',
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  'finish'
];

const checkIngredients = order => {
  return order.recipe.every(ingredient => {
    return order.ingredients.includes(ingredient);
  });
};

const changePosition = (state, id, delta) => {
  return state.map(order => {
    const newPosition = conveyor[conveyor.indexOf(order.position) + delta];
    const isDone = checkIngredients(order);
    let allowChange = false;
    if (order.id === id) {
      if (newPosition === 'finish') {
        if (isDone) {
          allowChange = true;
        }
      } else if (newPosition === 'clients') {
        allowChange = false;
      } else {
        allowChange = true;
      }
    }
    return allowChange ? { ...order, position: newPosition } : order;
  });
};

const addIngredient = (order, ingredient) => {
  if (
    order.recipe.includes(ingredient) &&
    !order.ingredients.includes(ingredient)
  ) {
    return { ...order, ingredients: [...order.ingredients, ingredient] };
  }
  return order;
};

export const getOrdersFor = (state, position) => {
  return state.orders.filter(order => order.position === position);
};
