import MoviesListContainer from 'containers/MoviesListContainer';
import { Routes, Route } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path="/">
        Index
      </Route>
      <Route element={<MoviesListContainer />} path="/movies">
        Movies
      </Route>
    </Routes>
  );
};

export default MainRouter;
