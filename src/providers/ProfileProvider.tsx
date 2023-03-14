import { createContext, ReactNode, useState, useEffect } from 'react';

const ProfileContext = createContext<{
  isLoggedIn: boolean;
  onLogin: (token: string) => void;
  onLogout: () => void;
}>({
  isLoggedIn: false,
  onLogin: () => {
    return;
  },
  onLogout: () => {
    return;
  },
});

type ProfileProviderProps = {
  children: ReactNode;
};

const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }: ProfileProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem('TOKEN') !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('TOKEN');
    setToken(null);
    setIsLoggedIn(false);
  };

  const loginHandler = (token: string) => {
    localStorage.setItem('TOKEN', token);
    setToken(token);
    setIsLoggedIn(true);
  };

  return <ProfileContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{children}</ProfileContext.Provider>;
};

export { ProfileContext, ProfileProvider };
