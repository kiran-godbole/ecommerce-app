// // src/HomePage.js
// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import Slider from './Slider';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setisLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setisLoading(true);
//       try {
//         const response = await fetch('https://swapi.dev/api/films/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const transformedMovies = data.results.map((movieData) => {
//           return {
//             id: movieData.episode_id,
//             title: movieData.title,
//             producer: movieData.producer,
//             date: movieData.release_date,
//           };
//         });
//         setMovies(transformedMovies);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setisLoading(false); // Set isLoading to false after data is fetched or an error occurs
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Slider />
//       <h1>Music Albums</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Album Name</th>
//             <th>Artist</th>
//             <th>Release Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         {/* {!isLoading ? ( // Display a loader while isLoading is true
//           <h2>Loading...</h2>
//         ) : ( */}
//           <tbody>
//             {
//               movies.map((movie) => (
//                 <tr key={movie.id}>

//                   <td>{movie.title}</td>
//                   <td>{movie.producer}</td>
//                   <td>{movie.date}</td>
//                   <td>
//                     <button>Book Ticket</button>
//                   </td>
//                 </tr>
//               ))
//             }

//           </tbody>
//         {/* )} */}
//       </table>

//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import './Home.css';
import Slider from './Slider';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [cancelRetry, setCancelRetry] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          producer: movieData.producer,
          date: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError('Something went wrong... Retrying');
      if (retrying && !cancelRetry) {
        // Retry fetching after 5 seconds if retrying is enabled and not canceled
        setTimeout(fetchData, 5000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRetryClick = () => {
    setRetrying(true);
    setCancelRetry(false);
    fetchData();
  };

  const handleCancelRetryClick = () => {
    setRetrying(false);
    setCancelRetry(true);
  };

  return (
    <div>
      <Slider />
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
          {isLoading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="4">{error}</td>
              {retrying && (
                <td>
                  <button onClick={handleRetryClick}>Retry</button>
                  <button onClick={handleCancelRetryClick}>Cancel Retry</button>
                </td>
              )}
            </tr>
          ) : (
            movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.producer}</td>
                <td>{movie.date}</td>
                <td>
                  <button>Book Ticket</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
