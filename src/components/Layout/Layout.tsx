import { ReactNode } from 'react';
import { MyMoviesLogo } from 'components/Icons';

import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout: React.FC<Props> = ({ children, header, footer }: Props) => {
  return (
    <div className={styles.layout}>
      <header>
        <MyMoviesLogo className={styles.icon} /> {header}{' '}
      </header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
