import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';
import Search from './Components/Search';

const api = 'https://api.themoviedb.org/3/discover/movie?api_key=d0b88ad225e04bcb752df9880f15c3b5&language=en-US&sort_by=popularity.desc&page=1';
const image_api = 'https://www.themoviedb.org/t/p/w1280';
const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=d0b88ad225e04bcb752df9880f15c3b5&query='
function App() {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    axios.get(api)
    .then(res=>setMovies(res.data.results))
  },[])
  
  return (
    <>
     <Search setMovies= {setMovies} />
   <div className="movie-container">
    
     {
       movies.map(movie=>(
         <Movie key={movie.id} {...movie}  />
       ))
     }
   </div>
   </>
  );
}

export default App;
