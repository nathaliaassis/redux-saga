import {
  FILTER_BY_COLOR, FILTER_CLOTHES
} from "../../constants";
import data from '../../../data';

const INITIAL_STATE = {
  data,
  filters: {
    colors: [],
    prices: {
      max: 0,
      min: 0
    }
  }
};

function clothesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_CLOTHES:
      state.filters[action.payload.name] = action.payload.value;
      return { ...state };
    default:
      return state;
  }
}

export default clothesReducer;


