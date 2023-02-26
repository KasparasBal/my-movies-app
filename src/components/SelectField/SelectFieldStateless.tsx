import Select, { SingleValue, MultiValue, ActionMeta } from 'react-select';

export type Option = { label: string; value: string };

export type SelectProps = {
  isMulti?: boolean;
  onChange?: ((newValue: SingleValue<Option> | MultiValue<Option>, actionMeta: ActionMeta<Option>) => void) | undefined;
  options: Option[];
};

const SelectFieldStateless: React.FC<SelectProps> = ({ options, onChange, isMulti }: SelectProps) => (
  <Select isMulti={isMulti} options={options} onChange={onChange} />
);

export default SelectFieldStateless;
