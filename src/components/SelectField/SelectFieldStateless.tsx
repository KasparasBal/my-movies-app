import Select, { SingleValue, MultiValue, ActionMeta, PropsValue } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type Option = { label: string; value: string };

export type SelectProps = {
  isMulti?: boolean;
  onChange?: ((newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: ActionMeta<Option>) => void) | undefined;
  options: Option[];
  value: PropsValue<Option> | MultiValue<Option>;
};

const SelectFieldStateless: React.FC<SelectProps> = ({ options, onChange, isMulti, value }: SelectProps) => {
  return <Select className={styles.selectField} isMulti={isMulti} options={options} value={value} onChange={onChange} />;
};

export default SelectFieldStateless;
