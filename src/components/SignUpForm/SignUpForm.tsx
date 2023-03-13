import { Form, FormikValues, ErrorMessage } from 'formik';
import { postSignUp } from 'api/sign-up/sign-up';
import { signUpSchema } from 'schemas';
import TextInputField from 'components/TextInputField/TextInputField';
import Button from 'components/Button/Button';
import InputWrapper from 'components/InputWrapper/InputWrapper';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import { Formik } from 'formik';

import styles from './SignUpForm.module.css';

type SignUpProps = {
  onClose: () => void;
  onFormChange: () => void;
};

type User = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm: React.FC<SignUpProps> = ({ onClose, onFormChange }: SignUpProps) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = async (values: FormikValues) => {
    const user: User = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    await postSignUp(user);
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div>Please sign-up</div>
          <InputWrapper forInput="name" labelText="Full name">
            <TextInputField id="name" name="name" placeholder="Enter full name" type="text" />
            <ErrorMessage className={styles.error} component="div" name="name" />
          </InputWrapper>
          <InputWrapper forInput="email" labelText="User email">
            <TextInputField id="email" name="email" placeholder="Enter user email" type="text" />
            <ErrorMessage className={styles.error} component="div" name="email" />
          </InputWrapper>
          <InputWrapper forInput="password" labelText="Password">
            <TextInputField id="password" name="password" placeholder="Enter user password" type="password" />
            <ErrorMessage className={styles.error} component="div" name="password" />
          </InputWrapper>
          <p className={styles.link}>
            Already a user?
            <button className={styles.button} type="button" onClick={onFormChange}>
              Sign-in!
            </button>
          </p>
          <div className={styles.buttons}>
            <NavigationLink>
              <a href="#" onClick={onClose}>
                Cancel
              </a>
            </NavigationLink>
            <Button buttonText="Sign-Up" buttonType="submit"></Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
