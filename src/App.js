import React, { useRef, useEffect } from 'react';
// import axios from 'axios';
import { instance } from './api';

import { GamesComponent } from './components/GamesComponent';

import './App.css';

function App() {
  const fileRef = useRef(null);

  const handleClick = () => {
    fileRef.current.click();
    console.log(fileRef);
  };

  // useEffect(() => {
  //   fetch(`${url}/users`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const fetchPosts = async () => {
    const response = await instance.get('/posts');
    console.log(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   instance.get('/posts').then((res) => console.log(res.data));
  // }, []);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => console.log(e.target.files[0])}
        style={{ display: 'none' }}
        ref={fileRef}
      />

      <button className="file-button" onClick={handleClick}>
        Upload file
      </button>

      <GamesComponent />
    </div>
  );
}

export default App;
