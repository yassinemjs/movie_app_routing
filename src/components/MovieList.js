import React, { useState } from "react";
import MovieCard from "./oneCard/MovieCard";
import { Link } from "react-router-dom";




export default function MovieList({films,newfilms}) {
  
    return (
    <div className="container-fluid contenedor text-center">
      <div className="work">
        <h1 className="text-center ">Movies Bibliotheque</h1>
        <br/>
        <div className=" container text-center">
          {(newfilms.length) ? newfilms.map((el, i) =><Link to= {`trailer/${el.title}`}> <MovieCard key={i} fiche={el} /></Link>) :films.map((el, i) => <Link to={`trailer/${el.title}`}><MovieCard key={i} fiche={el} /></Link> )}
        </div>
      </div>
      
    </div>
  );
}
