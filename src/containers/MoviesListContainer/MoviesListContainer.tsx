import Loader from 'components/Loader/Loader';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'hooks/useMediaQuery';
import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { FormikValues } from 'formik';

import MovieCard from './MovieCard/MovieCard';
import styles from './MoviesListContainer.module.css';
import MoviesListFilter from './MoviesListFilter/MoviesListFilter';

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
const fetchData = async (activePage: number) => {
  const { data } = await axios.get(`http://localhost:3001/movies?page=${activePage}`);
  return data;
};

const MoviesListContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');
  const { isLoading, error, data } = useQuery(['MovieData', activePage], () => fetchData(activePage));
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
        movieId={movie.movieId}
        moviePosterPath={movie.posterPath}
        movieReleaseDate={movie.releaseDate}
        movieTitle={movie.title}
        movieVoteAverage={movie.voteAverage}
      />
    ));
  const handlePageSelect = (page: number) => {
    setSearchParams({ page: `${page}` });
  };

  const handleFormSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <>
      <MoviesListFilter handleSubmit={handleFormSubmit} />
      <div>
        {isLoading && <Loader />}
        {error && 'Oops Something Went Wrong!'}
        {data && matchXS && <div className={`${styles.movieList} ${styles.movieList_xs}`}> {MovieData}</div>}
        {data && matchSM && <div className={`${styles.movieList} ${styles.movieList_sm}`}> {MovieData}</div>}
        {data && matchMD && <div className={`${styles.movieList} ${styles.movieList_md}`}> {MovieData}</div>}
        {data && matchLG && <div className={`${styles.movieList} ${styles.movieList_lg}`}> {MovieData}</div>}
        {data && matchXL && <div className={`${styles.movieList} ${styles.movieList_xl}`}> {MovieData}</div>}
      </div>
      <Pagination
        className={styles.paginationBar}
        currentPage={activePage}
        pageSize={20}
        totalCount={data && data.totalPages}
        onPageChange={(page) => handlePageSelect(page)}
      />
    </>
  );
};

export default MoviesListContainer;
