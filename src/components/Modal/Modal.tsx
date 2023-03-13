import { ReactNode } from 'react';

import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
