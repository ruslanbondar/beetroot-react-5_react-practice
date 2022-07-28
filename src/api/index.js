import axios from 'axios';

const url = 'https://mmo-games.p.rapidapi.com';

export const instance = axios.create({
  baseURL: url,
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
});
