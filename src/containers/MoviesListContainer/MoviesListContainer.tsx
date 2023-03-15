import Loader from 'components/Loader/Loader';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'hooks/useMediaQuery';
import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { FormikValues } from 'formik';
import { fetchPersonalMovies } from 'api/movies/movies';

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
const fetchData = async (
  activePage: number,
  movieFilter: {
    title?: string;
    genres?: string[];
    sort?: string;
  },
) => {
  let url = `http://localhost:3001/movies?page=${activePage}`;
  if (movieFilter.title) url += `&title=${movieFilter.title}`;
  if (movieFilter.sort) url += `&sort=${movieFilter.sort}`;
  if (movieFilter.genres && movieFilter.genres.length) {
    const genreParams = movieFilter.genres.map((genre) => `${genre}`).join(',');
    url += `&genres=${genreParams}`;
  }
  const { data } = await axios.get(url);
  return data;
};

const MoviesListContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = parseInt(searchParams.get('page') || '1');
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };
  const { isLoading, error, data } = useQuery(['MovieData', activePage, movieFilter], () => fetchData(activePage, movieFilter));
  const { match: matchXS } = useMediaQuery('(max-width: 576px)');
  const { match: matchSM } = useMediaQuery('(min-width: 576px) and (max-width: 768px)');
  const { match: matchMD } = useMediaQuery('(min-width: 768px) and (max-width: 992px)');
  const { match: matchLG } = useMediaQuery('(min-width: 992px) and (max-width: 1200px)');
  const { match: matchXL } = useMediaQuery('(min-width: 1200px)');

  const { data: personalMovies, refetch } = useQuery(['personal-movies'], fetchPersonalMovies);
  const movieIds = personalMovies && personalMovies.movies.map((movie) => movie.movieId);

  const MovieData =
    data &&
    data.movies.map((movie: Movie) => (
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
  const handlePageSelect = (page: number) => {
    setSearchParams({ page: `${page}` });
  };

  const handleFormSubmit = (values: FormikValues) => {
    const title = values.title || '';
    const sort = values.sort?.value || '';
    const genres = values.genres.map((obj: { label: string; value: number }) => obj.value);

    const searchParams: { [key: string]: string } = {};
    if (title) searchParams.title = title;
    if (sort) searchParams.sort = sort;
    if (genres) searchParams.genres = genres;

    setSearchParams(searchParams);
  };

  const handleReset = (resetForm: () => void) => {
    setSearchParams({ page: `${activePage}` });
    resetForm();
  };

  return (
    <>
      <MoviesListFilter handleReset={handleReset} handleSubmit={handleFormSubmit} />
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
