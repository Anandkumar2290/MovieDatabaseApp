import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const getSearchedMoviesURL =
  'https://api.themoviedb.org/3/search/movie?api_key=ea2773e6aac2a16fcde4ff24c489b068&language=en-US'

const Search = () => {
  const {query} = useParams()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const response = await fetch(
        `${getSearchedMoviesURL}&query=${query}&page=${page}`,
      )
      const data = await response.json()
      setMovies(data.results)
    }

    fetchSearchedMovies()
  }, [query, page])

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

export default Search
