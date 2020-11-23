import React ,{useState} from 'react'
import { Route, Switch } from "react-router-dom";
import MovieList from './components/MovieList'
import Trailer from './components/Trailer'
import './App.css';
import AddFilm from './components/AddFilm';
import FilterFilm from './components/FilterFilm';
import movies from './components/oneCard/InitialList' ;

function App() {
  
  const [films, setFilms] = useState(movies);
  const [newfilms ,setNewfilms] =useState ([]);
  
  function addMovie(myfilm) {
    setFilms([...films, myfilm]);
  }

  function searchFilm(film) {
    const res = films.filter( (el) => el.title.toLowerCase().includes(film)) ;
    if (res.length)
    return setNewfilms(res)
    else
    alert(`${film} doesn't exist`)
    setNewfilms([])
      }
 
    function searchRate (ind)  {
     const res =films.filter(el => el.rate == ind)
     if (res.length)
    return setNewfilms(res)
    else
    alert(`${ind} doesn't exist`)
    setNewfilms([])
    }

  return (
    <div className="container-fluid contenedor text-center">
           <div className="project"><FilterFilm searchFilm={searchFilm} searchRate= {searchRate} /></div>
          <Switch>
           <Route exact path="/"> 
             <div className="project"> <MovieList  films ={films} newfilms={newfilms}/></div>
            </Route> 
                                                           
            <Route exact path="/trailer/:title" render ={(props) => <Trailer res={films}  {...props}   />}   />
            </Switch>
          
           <div><AddFilm  addMovie ={addMovie} /></div>
           
     </div>
  );
}

export default App



