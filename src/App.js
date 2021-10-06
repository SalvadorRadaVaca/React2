import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './views/Blog';
import MoviesList from './views/MoviesList';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <Blog/>
        </Route>

        <Route path="/">
          <MoviesList/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
