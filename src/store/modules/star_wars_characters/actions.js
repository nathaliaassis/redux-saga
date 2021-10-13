import {
  SW_CHARACTER_FAILURE,
  SW_CHARACTER_SUCCESS,
  SW_CHARACTER_REQUEST
} from '../../constants';

export const getCharacterRequest = () => ({
  type: SW_CHARACTER_REQUEST
});

export const getCharacterSuccess = (payload) => ({
  type: SW_CHARACTER_SUCCESS,
  payload
});

export const getCharacterFailure = () => ({
  type: SW_CHARACTER_FAILURE
});