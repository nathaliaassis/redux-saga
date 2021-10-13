import { SELECT_ROUTE } from "../../constants"

const INITIAL_STATE = {
  id: '',
  name: '',
  path: '',
  view: null
};

function clothesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_ROUTE:
      return state;
    default:
      return state;
  }
}

export default clothesReducer;