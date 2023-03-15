import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';
import MyMoviesListContainer from 'containers/MyMoviesListContainer/MyMoviesListContainer';
import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={routes.index}>
        Index
      </Route>
      <Route element={<MoviesListContainer />} path={routes.movies}>
        Movies
      </Route>
      <Route element={<MyMoviesListContainer />} path={routes.myMovies}>
        MyMovies
      </Route>
      <Route element={<MovieInfoContainer />} path={routes.movie}>
        Movie
      </Route>
    </Routes>
  );
};

export default MainRouter;
