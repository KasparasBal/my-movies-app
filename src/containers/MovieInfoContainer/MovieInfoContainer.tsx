import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';
import Tag from 'components/Tag/Tag';
import currencyFormatter from 'helpers/currencyFormatter';

import styles from './MovieInfoContainer.module.css';

interface ProductionCompany {
  id: number;
  logoPath: string;
  name: string;
  originCountry: string;
}

interface Genre {
  id: number;
  name: string;
}

const MovieInfoContainer: React.FC = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery('MovieData', () => fetch(`http://localhost:3001/movies/${id}`).then((res) => res.json()));

  return (
    <div>
      {isLoading && <Loader />}
      {error && `Oops Something Went Wrong! ${error}`}
      {data && (
        <div
          className={styles.backdrop}
          style={{
            backgroundImage: `url(${data.backdropPath})`,
          }}
        >
          <div className={styles.movieContainer}>
            <div className={styles.posterWrapper}>
              <img alt="Movie Poster" className={styles.poster} src={data.posterPath} />
            </div>
            <div className={styles.infoWrapper}>
              <h2 className={styles.title}>
                {data.title}
                <span className={styles.releaseDate}>{`(${data.releaseDate})`}</span>
              </h2>
              <h3 className={styles.tagline}>{data.tagline}</h3>
              <ul className={styles.genreList}>
                {data.genres.map((genre: Genre) => (
                  <Tag key={genre.id}>{genre.name}</Tag>
                ))}
              </ul>
              <ul className={styles.detailsList}>
                <li className={styles.detailsListItem}>
                  Duration:<span className={styles.detailItem}>{data.runtime} min</span>
                </li>
                <li className={styles.detailsListItem}>
                  Vote average:<span className={styles.detailItem}>{data.voteAverage}</span>
                </li>
                <li className={styles.detailsListItem}>
                  Vote count:<span className={styles.detailItem}>{data.voteCount}</span>
                </li>
                <li className={styles.detailsListItem}>
                  Budget:<span className={styles.detailItem}>{currencyFormatter(data.budget)}</span>
                </li>
                <li className={styles.detailsListItem}>
                  Revenue:<span className={styles.detailItem}>{currencyFormatter(data.revenue)}</span>
                </li>
              </ul>
              <div>
                <h3>Overview</h3>
                <p className={styles.overview}>{data.overview}</p>
              </div>
              <div>
                <h3>Production Companies</h3>
                <ul className={styles.prodCompanies}>
                  {data.productionCompanies.map((company: ProductionCompany, index: number) => (
                    <li className={styles.prodCompany} key={company.id}>
                      {company.name}
                      {index !== data.productionCompanies.length - 1 && ','}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfoContainer;
