import { useEffect, useState } from 'react';
import '../App.css';
import PageWrapper from './PageWrapper';
import Pagination from './Pagination';
import Movie from './Movie';

function MoviesList() {

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const TOTAL_BY_PAGE = 7;

  useEffect(() => {
    findMovies();
  }, []);

  const findMovies = async () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json';

    let response = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://raw.githubusercontent.com/'
      }
    })
    let json = await response.json();
    setMovies(json);
  }

  const getPageTotal = () => {
    let quantityMoviesTotal = movies.length;
    return Math.ceil(quantityMoviesTotal / TOTAL_BY_PAGE);
  }

  let moviesByPage = movies.slice((currentPage - 1) * TOTAL_BY_PAGE, currentPage * TOTAL_BY_PAGE);

  return (
    <PageWrapper>

      {moviesByPage.map(movie => 
        <Movie title={movie.titulo} rating={movie.calificacion} director={movie.director} starts={movie.actores} date={movie.fecha} run_time={movie.duracion} img={movie.img}> 
          {movie.descripcion}
        </Movie>
      )}
      
      <Pagination page={currentPage} total={getPageTotal()} onChange={(page) => {
        setCurrentPage(page)
      }} />
      
    </PageWrapper>
  );
}

export default MoviesList;