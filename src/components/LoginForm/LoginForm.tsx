import { useContext } from 'react';
import { postLogin } from 'api/login/login';
import InputWrapper from 'components/InputWrapper/InputWrapper';
import TextInputField from 'components/TextInputField/TextInputField';
import { Formik, Form, FormikValues, ErrorMessage } from 'formik';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import Button from 'components/Button/Button';
import { loginSchema } from 'schemas';
import { ProfileContext } from 'providers/ProfileProvider';

import styles from './LoginForm.module.css';

type LoginProps = {
  onClose: () => void;
  onFormChange: () => void;
};

const LoginForm: React.FC<LoginProps> = ({ onClose, onFormChange }: LoginProps) => {
  const profileContext = useContext(ProfileContext);
  const initialValues = {
    email: '',
    password: '',
  };

  type User = {
    email: string;
    password: string;
  };

  const handleSubmit = async (values: FormikValues) => {
    const user: User = {
      email: values.email,
      password: values.password,
    };
    const token = await postLogin(user);

    profileContext.onLogin(`${token.token}`);
    onClose();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <div>Please login</div>
        <InputWrapper forInput="email" labelText="User email">
          <TextInputField id="email" name="email" placeholder="Enter user email" type="text" />
          <ErrorMessage className={styles.error} component="div" name="email" />
        </InputWrapper>
        <InputWrapper forInput="password" labelText="Password">
          <TextInputField id="password" name="password" placeholder="Enter user password" type="password" />
          <ErrorMessage className={styles.error} component="div" name="password" />
        </InputWrapper>
        <p className={styles.link}>
          Not a user yet?
          <button className={styles.button} type="button" onClick={onFormChange}>
            Sign-up!
          </button>
        </p>
        <div className={styles.buttons}>
          <NavigationLink>
            <a href="#" onClick={onClose}>
              Cancel
            </a>
          </NavigationLink>
          <Button buttonText="Login" buttonType="submit" />
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
