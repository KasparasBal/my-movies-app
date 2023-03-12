import { Field } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import { SelectProps } from './SelectFieldStateless';

const SelectField: React.FC<Omit<SelectProps, 'value'>> = (props) => {
  return <Field {...props} component={SelectFieldAdapter} />;
};

export default SelectField;
