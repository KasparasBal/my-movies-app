import styles from './TextInputFieldStateless.module.css';

export type TextInputFieldProps = {
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean;
  error?: string;
  id: string;
  name: string;
  type: string;
};

const TextInputFieldStateless: React.FC<TextInputFieldProps> = ({ placeholder, value, onChange, type, ...rest }: TextInputFieldProps) => {
  return <input {...rest} className={styles.input} placeholder={placeholder} type={type} value={value} onChange={onChange} />;
};
export default TextInputFieldStateless;
