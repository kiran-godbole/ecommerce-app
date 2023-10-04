// src/HomePage.js
import React from 'react';
import './Home.css'; 

const albums = [
  {
    id: 1,
    title: 'Album 1',
    artist: 'Artist 1',
    releaseDate: '2023-01-15',
    
  },
  {
    id: 2,
    title: 'Album 2',
    artist: 'Artist 2',
    releaseDate: '2023-02-20',
   
  },
  {
    id: 3,
    title: 'Album 3',
    artist: 'Artist 3',
    releaseDate: '2023-03-25',
    
  },
  {
    id: 4,
    title: 'Album 3',
    artist: 'Artist 3',
    releaseDate: '2023-03-25',
    
  },
  {
    id: 5,
    title: 'Album 3',
    artist: 'Artist 3',
    releaseDate: '2023-03-25',
    
  },
  {
    id: 6,
    title: 'Album 3',
    artist: 'Artist 3',
    releaseDate: '2023-03-25',
    
  },
];

const Home = () =>{
  return (
    <div>
      <h1>Music Albums</h1>
      <table>
        <thead>
          <tr>
            
            <th>Album Name</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              
              <td>{album.title}</td>
              <td>{album.artist}</td>
              <td>{album.releaseDate}</td>
              <td>
                <button>Book Ticket</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
