import {useState,useEffect} from 'react';
import './App.css';
import MovieCard from './movieCard';
import SearchComponent from './SearchBar';

// 76ee4364
const API_URL='http://www.omdbapi.com/?apikey=76ee4364';


const App = () =>{

    const [movies,setMovies]=useState([]);

    const searchMovies= async (title) => {
        const respose = await fetch(`${API_URL}&s=${title}`);
        const data = await respose.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('batman');
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <SearchComponent searchMovies={searchMovies}/>

            {
                movies?.length > 0 
                ?(
                <div className="container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))
                    }
                </div>
                )
                :(
                <div className="empty">
                    <h2>no movies found :</h2>
                </div>
                )

                
            }

            
        </div>

    )
}


export default App;