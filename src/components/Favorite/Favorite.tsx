import favoriteAdd from '../Icons/assets/favoriteAdd.svg';
import styles from './Favorite.module.css';

type FavoriteProps = {
  onClick: () => void;
};

const Favorite: React.FC<FavoriteProps> = ({ onClick }: FavoriteProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img alt="favorite icon" src={favoriteAdd} />
    </button>
  );
};

export default Favorite;
