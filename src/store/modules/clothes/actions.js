import {
  FILTER_BY_COLOR,
  FILTER_BY_BIGGEST_PRICE,
  FILTER_BY_LOWEST_PRICE,
  FILTER_CLOTHES
} from "../../constants";

export const filter_clothes = (payload) => ({
  type: FILTER_CLOTHES,
  payload
});
export const filter_color = (payload) => ({
  type: FILTER_BY_COLOR,
  payload
});

export const filter_biggest_price = (payload) => ({
  type: FILTER_BY_BIGGEST_PRICE,
  payload
});

export const filter_lowest_price = (payload) => ({
  type: FILTER_BY_LOWEST_PRICE,
  payload
});