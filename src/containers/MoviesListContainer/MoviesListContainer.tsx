import Loader from 'components/Loader/Loader';
import { useQuery } from 'react-query';

import MovieCard from './MovieCard/MovieCard';
import styles from './MoviesListContainer.module.css';

type Movie = {
  id?: string;
  email?: string;
  movieId: number;
  title: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
};
const MoviesListContainer: React.FC = () => {
  const { isLoading, error, data } = useQuery('MovieData', () => fetch('http://localhost:3001/movies').then((res) => res.json()));

  const MovieData =
    data &&
    data.movies.map((movie: Movie) => (
      <MovieCard
        key={movie.movieId}
        movieBackDropPath={movie.backdropPath}
        moviePosterPath={movie.posterPath}
        movieReleaseDate={movie.releaseDate}
        movieTitle={movie.title}
        movieVoteAverage={movie.voteAverage}
      />
    ));

  return (
    <div>
      {isLoading && <Loader />}
      {error && 'Oops Something Went Wrong!'}
      {data && <div className={styles.movieList}> {MovieData}</div>}
    </div>
  );
};

export default MoviesListContainer;
