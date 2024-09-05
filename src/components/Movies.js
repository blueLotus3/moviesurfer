import { useState, useEffect } from 'react'


const Movies = () => {
    
    const [movie, setMovie] = useState([]);
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const url = 'http://www.omdbapi.com/?t=Pulp+Fiction&apikey=';
    const apiUrl = url + REACT_APP_API_KEY

    useEffect(() => {
      // Fetch data from the API
      fetch(apiUrl)
        .then(response => response.json())
        .then(movie => setMovie(movie))
        .catch(error => console.error('Error fetching data:', error));
    }, []); 
  
    return (
      <div>
{movie ? <li>{JSON.stringify(movie.Title,null)}</li> : 'Loading...'}
      </div>
    );
  }




export default Movies