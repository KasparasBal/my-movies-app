import { FieldProps } from 'formik';

import TextInputFieldStateless, { TextInputFieldProps } from './TextInputFieldStateless';

const TextInputFieldAdapter: React.FC<TextInputFieldProps & FieldProps> = (props) => {
  return <TextInputFieldStateless {...props} />;
};

export default TextInputFieldAdapter;
