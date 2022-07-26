import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://mmo-games.p.rapidapi.com';

export const GamesComponent = () => {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    axios
      .get(`${url}/games`, {
        headers: {
          'X-RapidAPI-Key':
            '246589fc6fmshaca703e5714c83cp1073f2jsne3801f900b7f',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
        },
        params: genre && {
          category: genre,
        },
      })
      .then((res) => setGames(res.data));
  }, [genre]);

  return (
    <div>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">All</option>
        <option value="shooter">Shooter</option>
        <option value="mmorpg">MMORPG</option>
      </select>

      {games.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
