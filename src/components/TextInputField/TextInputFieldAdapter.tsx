import { FieldProps } from 'formik';

import TextInputFieldStateless, { TextInputFieldProps } from './TextInputFieldStateless';

const TextInputFieldAdapter: React.FC<TextInputFieldProps & FieldProps> = ({ field, ...props }) => {
  return <TextInputFieldStateless {...props} {...field} />;
};

export default TextInputFieldAdapter;
