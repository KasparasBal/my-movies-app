import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { match } = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!match) setIsActive(false);
  }, [match]);

  const isActiveHandler = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <header className={styles.header}>
        <MyMoviesLogo className={styles.icon} />
        {match && <HamburgerButton isActive={isActive} onClick={isActiveHandler} />}
      </header>
      {isActive && <Sidebar onBackDropClick={isActiveHandler}>Sidebar Content</Sidebar>}
    </>
  );
};

export default Header;
