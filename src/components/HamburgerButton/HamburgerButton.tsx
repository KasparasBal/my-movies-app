import styles from './HamburgerButton.module.css';

type ActiveProps = {
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const HamburgerButton: React.FC<ActiveProps> = (props: ActiveProps) => {
  return (
    <button className={props.isActive ? styles.hamburgerBtn : `${styles.hamburgerBtn} ${styles.Crossed}`} onClick={props.onClick}>
      <span className={styles['row-1']}></span>
      <span className={styles['row-2']}></span>
      <span className={styles['row-3']}></span>
    </button>
  );
};

export default HamburgerButton;
