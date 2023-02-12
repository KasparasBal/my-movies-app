import Loader from 'components/Loader/Loader';
import { useQuery } from 'react-query';

// type Movies = {
//   page: number;
//   totalPages: number;
//   movies: Movie[];
// };

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
      <div key={movie.movieId}>
        <ul>
          <li>{movie.title}</li>
          <li>{movie.releaseDate}</li>
          <li>{movie.backdropPath}</li>
          <li>{movie.posterPath}</li>
          <li>{movie.voteAverage}</li>
        </ul>
      </div>
    ));

  return (
    <div>
      {isLoading && <Loader />}
      {error && 'Oops Something Went Wrong!'}
      {data && MovieData}
    </div>
  );
};

export default MoviesListContainer;
