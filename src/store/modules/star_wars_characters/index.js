import {
  SW_CHARACTER_FAILURE,
  SW_CHARACTER_SUCCESS,
  SW_CHARACTER_REQUEST
} from '../../constants';

const INITIAL_STATE = {
  characters: [],
  loading: false,
};

function starWarsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SW_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SW_CHARACTER_SUCCESS:
      const { results } = action.payload;
      return {
        ...state,
        characters: results,
        loading: false
      };
    case SW_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
};


export default starWarsReducer;