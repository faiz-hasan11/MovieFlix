import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './MovieList'
import SearchBox from './SearchBox'


function App() {
  const [movies,setMovies] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [selectedMovie,setSelectedMovie] = useState([])

  const getMovieRequest = async (searchValue) =>
  {
    if(searchValue==='')
    {
      setMovies([])
      setSelectedMovie([])
    }
    else{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2a08644`
    const response = await fetch(url)
    const responseJSON = await response.json()
    if(responseJSON.Search)
      setMovies(responseJSON.Search)
    }
  }

useEffect(() => {
  getMovieRequest(searchValue)
}, [searchValue])


 const getMovieDetail = (id) => {
    const newMovie = movies.filter((movie) => movie.imdbID == id )
    setSelectedMovie(newMovie)
    console.log(selectedMovie)
  }

  return (
    <div className='container-fluid movieapp'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <div className='col'>
            <br></br>
            <h1><img src="https://fontmeme.com/permalink/210104/2b7256168db09ca686865907087d45f0.png" style={{width:250,height:150}}/></h1>            
        </div>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
       <div className='row'>
        <MovieList movies={movies} getMovieDetail={getMovieDetail}/>
      </div> 
      <div >
        {selectedMovie.length>0 && 
        <div>
          <center>
          <h1>{selectedMovie[0].Title}</h1>
          <h1>{selectedMovie[0].Year}</h1>
          <h1>{selectedMovie[0].Type}</h1>
          </center>
        </div>
        }
      </div>     
    </div>
  );
}

export default App;
