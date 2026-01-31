import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/search/:query" component={Search} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
