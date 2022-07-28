import { instance } from '../index';

export const fetchGames = async (genre) => {
  const response = await instance.get('/games', {
    params: genre && {
      category: genre,
    },
  });

  return response.data;
};
