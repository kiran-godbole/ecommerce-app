// src/HomePage.js
import React, { useState } from 'react';
import './Home.css'; 
import Slider from './Slider';

// const albums = [
//   {
//     id: 1,
//     title: 'Album 1',
//     artist: 'Artist 1',
//     releaseDate: '2023-01-15',
    
//   },
//   {
//     id: 2,
//     title: 'Album 2',
//     artist: 'Artist 2',
//     releaseDate: '2023-02-20',
   
//   },
//   {
//     id: 3,
//     title: 'Album 3',
//     artist: 'Artist 3',
//     releaseDate: '2023-03-25',
    
//   },
//   {
//     id: 4,
//     title: 'Album 3',
//     artist: 'Artist 3',
//     releaseDate: '2023-03-25',
    
//   },
//   {
//     id: 5,
//     title: 'Album 3',
//     artist: 'Artist 3',
//     releaseDate: '2023-03-25',
    
//   },
//   {
//     id: 6,
//     title: 'Album 3',
//     artist: 'Artist 3',
//     releaseDate: '2023-03-25',
    
//   },
// ];

const Home = () =>{
const [movies, setMovies] = useState([]);
  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/').then( response => {
      return response.json();
    }).then(data =>{
      const transformedMovies = data.results.map(movieData =>{
        return {
          id: movieData.episode_id,
          title: movieData.title,
          producer: movieData.producer,
          date: movieData.release_date
        }
      });
      setMovies(transformedMovies);
    })
  }
  return (
    <div>
      <Slider/>
      <h1 onClick={fetchMovieHandler}>Music Albums</h1>
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
          {movies.map((movie) => (
            <tr key={movie.id}>
              
              <td>{movie.title}</td>
              <td>{movie.producer}</td>
              <td>{movie.date}</td>
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
