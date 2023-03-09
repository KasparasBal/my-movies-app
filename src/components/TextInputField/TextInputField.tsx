import { Field } from 'formik';

import TextInputFieldAdapter from './TextInputFieldAdapter';
import { TextInputFieldProps } from './TextInputFieldStateless';

const TextInputField: React.FC<Omit<TextInputFieldProps, 'value'>> = (props) => {
  return <Field {...props} component={TextInputFieldAdapter} />;
};

export default TextInputField;
