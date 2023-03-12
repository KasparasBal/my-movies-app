import styles from './InputWrapper.module.css';

type InputWrapperProps = {
  forInput: string;
  labelText: string;
  children: React.ReactNode;
};

const InputWrapper: React.FC<InputWrapperProps> = ({ forInput, labelText, children }: InputWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={forInput}>
        {labelText}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
