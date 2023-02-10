import { ReactNode } from 'react';

import styles from './Layout.module.css';

type Props = {
  Header: React.FC;
  Footer: React.FC;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ Header, Footer, children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
