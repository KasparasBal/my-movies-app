import { MyMoviesLogo } from 'components/Icons';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.icon} />
    </header>
  );
};

export default Header;
