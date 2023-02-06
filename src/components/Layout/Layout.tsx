import { ReactNode } from 'react';

import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  Header: React.FC;
  footer: ReactNode;
};

const Layout: React.FC<Props> = ({ children, Header, footer }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main>{children}</main>
        <footer>{footer}</footer>
      </div>
    </>
  );
};

export default Layout;
