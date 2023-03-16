import { useContext } from 'react';
import { Navigate } from 'react-router';
import { fetchPersonalMovies } from 'api/movies/movies';
import Loader from 'components/Loader/Loader';
import MovieCard from 'containers/MoviesListContainer/MovieCard/MovieCard';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { ProfileContext } from '../../providers/ProfileProvider';
import styles from './MyMoviesListContainer.module.css';

const MyMoviesListContainer: React.FC = () => {
  const profileContext = useContext(ProfileContext);
  const { data, isLoading, refetch } = useQuery(['personal-movies'], fetchPersonalMovies);

  const movieIds = data && data.movies.map((movie) => movie.movieId);

  const Movie =
    data &&
    data.movies.map((movie) => (
      <MovieCard
        key={movie.movieId}
        movieBackDropPath={movie.backdropPath}
        movieId={movie.movieId}
        movieIds={movieIds}
        moviePosterPath={movie.posterPath}
        movieRefetch={refetch}
        movieReleaseDate={movie.releaseDate}
        movieTitle={movie.title}
        movieVoteAverage={movie.voteAverage}
      />
    ));

  const { match: matchXS } = useMediaQuery('(max-width: 576px)');
  const { match: matchSM } = useMediaQuery('(min-width: 576px) and (max-width: 768px)');
  const { match: matchMD } = useMediaQuery('(min-width: 768px) and (max-width: 992px)');
  const { match: matchLG } = useMediaQuery('(min-width: 992px) and (max-width: 1200px)');
  const { match: matchXL } = useMediaQuery('(min-width: 1200px)');

  return profileContext.isLoggedIn ? (
    <div className={styles.content}>
      {isLoading && <Loader />}
      {data && matchSM && <div className={`${styles.movieList} ${styles.movieList_sm}`}> {Movie}</div>}
      {data && matchXS && <div className={`${styles.movieList} ${styles.movieList_xs}`}> {Movie}</div>}
      {data && matchMD && <div className={`${styles.movieList} ${styles.movieList_md}`}> {Movie}</div>}
      {data && matchLG && <div className={`${styles.movieList} ${styles.movieList_lg}`}> {Movie}</div>}
      {data && matchXL && <div className={`${styles.movieList} ${styles.movieList_xl}`}> {Movie}</div>}
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default MyMoviesListContainer;
