import { ReactNode } from 'react';

import styles from './Tag.module.css';

type Props = {
  children: ReactNode;
};

const Tag: React.FC<Props> = (props: Props) => {
  return <li className={styles.tag}>{props.children}</li>;
};

export default Tag;
