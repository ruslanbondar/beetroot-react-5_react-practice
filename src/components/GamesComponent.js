import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { fetchGames } from '../api/requests';

// const url = 'https://mmo-games.p.rapidapi.com';

export const GamesComponent = () => {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const res = fetchGames(genre);
    res.then((data) => setGames(data));
  }, [genre]);

  // useEffect(() => {
  //   axios
  //     .get(`${url}/games`, {
  //       headers: {
  //         'X-RapidAPI-Key':
  //           '',
  //         'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  //       },
  //       params: genre && {
  //         category: genre,
  //       },
  //     })
  //     .then((res) => setGames(res.data));
  // }, [genre]);

  const ascSort = () => {
    const sortedGames = games.sort((a, b) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0,
    );

    setGames([...sortedGames]);
  };

  const descSort = () => {
    const sortedGames = games.sort((a, b) =>
      a.title > b.title ? -1 : a.title < b.title ? 1 : 0,
    );

    setGames([...sortedGames]);
  };

  return (
    <div>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">All</option>
        <option value="shooter">Shooter</option>
        <option value="mmorpg">MMORPG</option>
      </select>

      <button onClick={ascSort}>A-Z</button>
      <button onClick={descSort}>Z-A</button>

      {games.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
