import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import MovieCard from './MovieCard';
import Filter from './Filter';
import { EditMovie } from './EditMovie';


function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
           <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/movies/:id">
              <MovieCard />
            </Route>
            <Route path="/movies/:id">
              <EditMovie />
            </Route>
            <Route exact path='/movies'>
              <Filter />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
