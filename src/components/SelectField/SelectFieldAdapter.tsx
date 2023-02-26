import { FieldProps } from 'formik';

import SelectFieldStateless, { Option, SelectProps } from './SelectFieldStateless';

const SelectFieldAdapter: React.FC<FieldProps & Option & SelectProps> = (props) => {
  return <SelectFieldStateless {...props} />;
};

export default SelectFieldAdapter;
