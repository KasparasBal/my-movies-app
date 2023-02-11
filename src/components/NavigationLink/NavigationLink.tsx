import { ReactNode } from 'react';

import styles from './NavigationLink.module.css';

type NavLinkProps = {
  children: ReactNode;
};

const NavigationLink: React.FC<NavLinkProps> = (props) => {
  return <div className={styles.link}>{props.children}</div>;
};

export default NavigationLink;
