import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const history = useHistory()

  const onSearch = e => {
    e.preventDefault()
    if (query.trim()) {
      history.push(`/search/${query}`)
      setQuery('')
    }
  }

  return (
    <nav className="navbar">
      <h2 className="logo">movieDB</h2>

      <div className="nav-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>

      <form onSubmit={onSearch} className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar
