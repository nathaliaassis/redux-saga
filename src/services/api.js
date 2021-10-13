import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev',
});

export const SWAPI = axios.create({
  baseURL: 'https://swapi.dev/api/',
})