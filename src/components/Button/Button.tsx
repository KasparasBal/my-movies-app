import styles from './Button.module.css';

type ButtonProps = {
  buttonText: string;
  buttonType: 'button' | 'submit' | 'reset';
  buttonOnClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ buttonText, buttonType, buttonOnClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={buttonType} onClick={buttonOnClick}>
      {buttonText}
    </button>
  );
};

export default Button;
