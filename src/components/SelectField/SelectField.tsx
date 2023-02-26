import { Field } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import { Option, SelectProps } from './SelectFieldStateless';

const SelectField: React.FC<Option & SelectProps> = (props) => {
  return <Field {...props} component={SelectFieldAdapter} />;
};

export default SelectField;
