import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
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
    </Routes>
  );
};

export default MainRouter;
