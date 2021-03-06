import { ADD, REMOVE } from '../../constants';

function addRemoveReducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case REMOVE:
      return state - 1;
    default:
      return state;
  }
}

export default addRemoveReducer;