import { useContext } from 'react';
import Favorite from 'components/Favorite/Favorite';
import { StarIcon } from 'components/Icons';
import { ProfileContext } from 'providers/ProfileProvider';
import { postMovieSave } from 'api/movie-save/movie-save';

import styles from './MovieCard.module.css';

type Movie = {
  movieId: number;
  movieTitle: string;
  movieReleaseDate: string;
  movieBackDropPath: string;
  moviePosterPath: string;
  movieVoteAverage: number;
};

const MovieCard: React.FC<Movie> = (props: Movie) => {
  const profileContext = useContext(ProfileContext);

  const handleMovieFavorite = async () => {
    const movie = {
      movieId: props.movieId,
      title: props.movieTitle,
      releaseDate: props.movieReleaseDate,
      backdropPath: props.movieBackDropPath,
      posterPath: props.moviePosterPath,
      voteAverage: props.movieVoteAverage,
    };

    await postMovieSave(movie);
  };
  return (
    <div className={styles.movieCard}>
      <a href={`http://localhost:3000/movies/${props.movieId}`}>
        <img alt="movie poster photo" className={styles.movieCard_image} src={props.moviePosterPath} />
      </a>
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
          {props.movieReleaseDate} {profileContext.isLoggedIn && <Favorite onClick={handleMovieFavorite} />}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
