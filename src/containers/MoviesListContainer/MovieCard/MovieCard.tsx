import { useContext } from 'react';
import Favorite from 'components/Favorite/Favorite';
import { StarIcon } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import { ProfileContext } from 'providers/ProfileProvider';
import { postMovieSave } from 'api/movie-save/movie-save';
import { deleteMovie } from 'api/movie-delete/movie-delete';

import styles from './MovieCard.module.css';

type Movie = {
  movieId: number;
  movieIds?: number[];
  movieTitle: string;
  movieRefetch: () => void;
  movieReleaseDate: string;
  movieBackDropPath: string;
  moviePosterPath: string;
  movieVoteAverage: number;
};

const MovieCard: React.FC<Movie> = (props: Movie) => {
  const profileContext = useContext(ProfileContext);

  const movieIdMatch = props.movieIds && props.movieIds.includes(props.movieId);

  const handleMovieFavorite = async () => {
    const movie = {
      movieId: props.movieId,
      title: props.movieTitle,
      releaseDate: props.movieReleaseDate,
      backdropPath: props.movieBackDropPath,
      posterPath: props.moviePosterPath,
      voteAverage: props.movieVoteAverage,
    };
    movieIdMatch ? await deleteMovie(`${props.movieId}`) : await postMovieSave(movie);
    props.movieRefetch();
  };
  return (
    <div className={styles.movieCard}>
       <NavLink to=`movies/${props.movieId}`>
        <img alt="movie poster photo" className={styles.movieCard_image} src={props.moviePosterPath} />
     </NavLink>
      <div className={styles.movieCard_details}>
        <div>
          <p className={styles.movieCard_rating}>
            <span>
              <StarIcon />
            </span>
            {props.movieVoteAverage}
          </p>
          <p className={styles.movieCard_title}>{props.movieTitle}</p>
        </div>
        <div className={styles.movieCard_releaseDate}>
          {props.movieReleaseDate}
          {props.movieIds && <span>{profileContext.isLoggedIn && <Favorite movieIdMatch={movieIdMatch} onClick={handleMovieFavorite} />} </span>}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
