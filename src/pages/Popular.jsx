import {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const getPopularMoviesURL =
  'https://api.themoviedb.org/3/movie/popular?api_key=ea2773e6aac2a16fcde4ff24c489b068&language=en-US'

const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(`${getPopularMoviesURL}&page=${page}`)
      const data = await response.json()
      setMovies(data.results)
    }

    fetchPopularMovies()
  }, [page]) // triggers on page load AND pagination change

  return (
    <>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default Popular
