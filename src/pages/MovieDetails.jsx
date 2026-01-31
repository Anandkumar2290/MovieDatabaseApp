import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {endpoints, IMAGE_BASE_URL} from '../services/api'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(endpoints.movieDetails(id))
      .then(res => res.json())
      .then(setMovie)

    fetch(endpoints.movieCredits(id))
      .then(res => res.json())
      .then(data => setCast(data.cast))
  }, [id])

  if (!movie) return null

  return (
    <div className="details">
      <div className="movie-info">
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>⭐ {movie.vote_average}</p>
          <p>⏱ {movie.runtime} mins</p>
          <p>📅 {movie.release_date}</p>
        </div>
      </div>

      <h3>Cast</h3>
      <div className="cast-grid">
        {cast.map(c => (
          <div key={c.cast_id} className="cast-card">
            {c.profile_path && (
              <img src={`${IMAGE_BASE_URL}${c.profile_path}`} alt={c.name} />
            )}
            <p>{c.original_name}</p>
            <small>{c.character}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
