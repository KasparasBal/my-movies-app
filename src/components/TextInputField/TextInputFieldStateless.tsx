import styles from './TextInputFieldStateless.module.css';

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInputFieldStateless: React.FC<Props> = ({ placeholder, value, onChange }: Props) => {
  return <input className={styles.input} placeholder={placeholder} type="text" value={value} onChange={onChange}></input>;
};
export default TextInputFieldStateless;
