import ReactDOM from 'react-dom';
import { Form, FormikValues, ErrorMessage } from 'formik';
import axios from 'axios';
import { signUpSchema } from 'schemas';
import TextInputField from 'components/TextInputField/TextInputField';
import Button from 'components/Button/Button';
import InputWrapper from 'components/InputWrapper/InputWrapper';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import { Formik } from 'formik';

import styles from './SignUpModal.module.css';

type SignUpProps = {
  onClose: () => void;
};

type User = {
  name: string;
  email: string;
  password: string;
};

const BackDrop: React.FC = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay: React.FC<SignUpProps> = ({ onClose }: SignUpProps) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = async (values: FormikValues) => {
    const { data } = await axios.post<User>('http://localhost:3001/sign-up', values);
    console.log(data);
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
            Already a user? <span>Sign-in!</span>
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

const SignUpModal: React.FC<SignUpProps> = ({ onClose }: SignUpProps) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    throw new Error('modal-root element not found');
  }

  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, modalRoot)}
      {ReactDOM.createPortal(<ModalOverlay onClose={onClose} />, modalRoot)}
    </>
  );
};

export default SignUpModal;
