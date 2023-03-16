import { FavoriteAdd } from 'components/Icons';
import { FavoriteRemove } from 'components/Icons';

import styles from './Favorite.module.css';

type FavoriteProps = {
  onClick: () => void;
  movieIdMatch: boolean | undefined;
};

const Favorite: React.FC<FavoriteProps> = ({ onClick, movieIdMatch }: FavoriteProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {movieIdMatch ? <FavoriteRemove /> : <FavoriteAdd />}
    </button>
  );
};

export default Favorite;
