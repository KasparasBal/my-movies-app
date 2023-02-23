import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';
import NavigationLink from 'components/NavigationLink/NavigationLink';

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
        <a href="/">
          <MyMoviesLogo className={styles.icon} />
        </a>
        <nav>
          {match && <HamburgerButton isActive={isActive} onClick={isActiveHandler} />}
          {!match && (
            <NavigationLink>
              <NavLink to="Movies">Movies</NavLink>{' '}
            </NavigationLink>
          )}
        </nav>
      </header>
      {isActive && (
        <Sidebar onBackDropClick={isActiveHandler}>
          <NavigationLink>
            <NavLink to="Movies">Movies</NavLink>
          </NavigationLink>
        </Sidebar>
      )}
    </>
  );
};

export default Header;
