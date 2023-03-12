import { FieldProps } from 'formik';
import { MultiValue, SingleValue } from 'react-select';

import SelectFieldStateless, { Option, SelectProps } from './SelectFieldStateless';

const SelectFieldAdapter: React.FC<FieldProps & Option & SelectProps> = ({ field, form, ...props }) => {
  const { setFieldValue } = form;
  const { name } = field;

  const handleChange = (selectValue: MultiValue<Option> | SingleValue<Option>) => {
    setFieldValue(name, selectValue);
  };

  return <SelectFieldStateless {...props} {...field} onChange={handleChange} />;
};

export default SelectFieldAdapter;
