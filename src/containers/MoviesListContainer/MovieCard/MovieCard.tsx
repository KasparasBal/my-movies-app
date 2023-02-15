import { StarIcon } from 'components/Icons';

import styles from './MovieCard.module.css';

type Movie = {
  movieTitle: string;
  movieReleaseDate: string;
  movieBackDropPath: string;
  moviePosterPath: string;
  movieVoteAverage: number;
};

const MovieCard: React.FC<Movie> = (props: Movie) => {
  return (
    <div className={styles.movieCard}>
      <img alt="movie poster photo" className={styles.movieCard_image} src={props.moviePosterPath} />
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
        <div className={styles.movieCard_releaseDate}>{props.movieReleaseDate}</div>
      </div>
    </div>
  );
};

export default MovieCard;
