import { SELECT_ROUTE } from '../../constants';

export const selectRoute = (payload) => {
  return {
    type: SELECT_ROUTE,
    payload
  }
};