import styles from './TextInputFieldStateless.module.css';

export type TextInputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean;
  error?: string;
};

const TextInputFieldStateless: React.FC<TextInputFieldProps> = ({ placeholder, value, onChange }: TextInputFieldProps) => {
  return <input className={styles.input} placeholder={placeholder} type="text" value={value} onChange={onChange}></input>;
};
export default TextInputFieldStateless;
