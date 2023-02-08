import { ReactNode } from 'react';

import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  Header: React.FC;
  Footer: React.FC;
};

const Layout: React.FC<Props> = ({ children, Header, Footer }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
