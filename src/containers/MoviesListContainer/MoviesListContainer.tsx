import Loader from 'components/Loader/Loader';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'hooks/useMediaQuery';

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
  const { match: matchXS } = useMediaQuery('(max-width: 576px)');
  const { match: matchSM } = useMediaQuery('(min-width: 576px) and (max-width: 768px)');
  const { match: matchMD } = useMediaQuery('(min-width: 768px) and (max-width: 992px)');
  const { match: matchLG } = useMediaQuery('(min-width: 992px) and (max-width: 1200px)');
  const { match: matchXL } = useMediaQuery('(min-width: 1200px)');

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
      {data && matchXS && <div className={`${styles.movieList} ${styles.movieList_xs}`}> {MovieData}</div>}
      {data && matchSM && <div className={`${styles.movieList} ${styles.movieList_sm}`}> {MovieData}</div>}
      {data && matchMD && <div className={`${styles.movieList} ${styles.movieList_md}`}> {MovieData}</div>}
      {data && matchLG && <div className={`${styles.movieList} ${styles.movieList_lg}`}> {MovieData}</div>}
      {data && matchXL && <div className={`${styles.movieList} ${styles.movieList_xl}`}> {MovieData}</div>}
    </div>
  );
};

export default MoviesListContainer;
