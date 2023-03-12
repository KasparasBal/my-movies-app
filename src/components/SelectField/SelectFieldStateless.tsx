import Select, { SingleValue, MultiValue, ActionMeta, PropsValue } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type Option = { label: string; value: string };

export type SelectProps = {
  isMulti?: boolean;
  onChange?: ((newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: ActionMeta<Option>) => void) | undefined;
  options: Option[] | undefined;
  value: PropsValue<Option> | MultiValue<Option>;
  id: string;
  name: string;
  placeholder: string;
};

const SelectFieldStateless: React.FC<SelectProps> = ({ options, onChange, isMulti, value, ...rest }: SelectProps) => {
  return <Select className={styles.selectField} {...rest} isMulti={isMulti} options={options} value={value} onChange={onChange} />;
};

export default SelectFieldStateless;
