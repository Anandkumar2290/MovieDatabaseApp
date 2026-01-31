import {Link} from 'react-router-dom'
import {IMAGE_BASE_URL} from '../services/api'

const MovieCard = ({movie}) => (
  <div className="movie-card">
    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p> {movie.vote_average}</p>
    <Link to={`/movie/${movie.id}`}>
      <button type="button">View Details</button>
    </Link>
  </div>
)

export default MovieCard
