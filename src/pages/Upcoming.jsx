import {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const getUpcomingMoviesURL =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=ea2773e6aac2a16fcde4ff24c489b068&language=en-US'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await fetch(`${getUpcomingMoviesURL}&page=${page}`)
      const data = await response.json()
      setMovies(data.results)
    }

    fetchUpcomingMovies()
  }, [page])

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

export default Upcoming
