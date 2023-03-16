import { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import Modal from 'components/Modal/Modal';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import LoginForm from 'components/LoginForm/LoginForm';

import styles from './Header.module.css';
import { ProfileContext } from '../../providers/ProfileProvider';

const Header: React.FC = () => {
  const profileContext = useContext(ProfileContext);
  const [isActive, setIsActive] = useState(false);
  const [formType, setFormType] = useState(false);
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

  const formChangeHandler = () => {
    setFormType(!formType);
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
                <NavLink to="my-movies">My Movies</NavLink>
              </NavigationLink>
              {profileContext.isLoggedIn ? (
                <NavigationLink>
                  <a href="#" onClick={profileContext.onLogout}>
                    Logout
                  </a>
                </NavigationLink>
              ) : (
                <NavigationLink>
                  <a href="#" onClick={openModalHandler}>
                    Sign in/up
                  </a>
                </NavigationLink>
              )}
            </div>
          )}
        </nav>
      </header>
      {isActive && (
        <Sidebar onBackDropClick={isActiveHandler}>
          <NavigationLink>
            <NavLink to="Movies">Movies</NavLink>
          </NavigationLink>
          <NavigationLink>
            <NavLink to="my-movies">My Movies</NavLink>
          </NavigationLink>
          {profileContext.isLoggedIn ? (
            <NavigationLink>
              <a href="#" onClick={profileContext.onLogout}>
                Logout
              </a>
            </NavigationLink>
          ) : (
            <NavigationLink>
              <a
                href="#"
                onClick={() => {
                  openModalHandler(), isActiveHandler();
                }}
              >
                Sign in/up
              </a>
            </NavigationLink>
          )}
        </Sidebar>
      )}
      {isModalOpen && (
        <Modal>
          {formType === false ? (
            <LoginForm onClose={closeModalHandler} onFormChange={formChangeHandler} />
          ) : (
            <SignUpForm onClose={closeModalHandler} onFormChange={formChangeHandler} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Header;
