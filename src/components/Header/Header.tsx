import { useState, useEffect } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import SignUpModal from 'components/SignUpModal/SignUpModal';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { match } = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!match) setIsActive(false);
  }, [match]);

  const isActiveHandler = () => {
    setIsActive((isActive) => !isActive);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <NavLink to="Movies">
          <MyMoviesLogo className={styles.icon} />
        </NavLink>

        <nav>
          {match && <HamburgerButton isActive={isActive} onClick={isActiveHandler} />}
          {!match && (
            <div className={styles.links}>
              <NavigationLink>
                <NavLink to="Movies">Movies</NavLink>
              </NavigationLink>
              <NavigationLink>
                <a href="#" onClick={openModalHandler}>
                  SignUp
                </a>
              </NavigationLink>
            </div>
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
      {isModalOpen && <SignUpModal onClose={closeModalHandler} />}
    </>
  );
};

export default Header;
