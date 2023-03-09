import { Formik, Form, FormikValues } from 'formik';
import { useQuery } from 'react-query';
import TextInputField from 'components/TextInputField/TextInputField';
import SelectField from 'components/SelectField/SelectField';
import { fetchSortOptions } from 'api/sort/sort';
import { fetchGenres } from 'api/genres/genres';

import styles from './MoviesListFilter.module.css';

type Props = {
  handleSubmit: (values: FormikValues) => void;
  handleReset: (resetForm: () => void) => void;
};

const MoviesListFilter: React.FC<Props> = ({ handleSubmit, handleReset }) => {
  const initialValues = {
    title: '',
    genres: [],
    sort: [],
  };

  const { data: genreData } = useQuery(['genreData'], fetchGenres);
  const { data: sortData } = useQuery(['sortData'], fetchSortOptions);

  const genres = genreData?.genres.map((genre) => ({ label: genre.name, value: genre.id.toString() }));
  const sort = sortData?.map((option: { name: string; code: string }) => ({
    label: option.name,
    value: option.code,
  }));

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ resetForm }) => (
        <Form className={styles.form}>
          <TextInputField id="title" name="title" placeholder="Enter movie title" type="text" />
          <SelectField id="genres" name="genres" options={genres} placeholder="Select genres" isMulti />
          <SelectField id="sort" name="sort" options={sort} placeholder="Select sorting" />
          <button className={styles.button} type="submit">
            Submit
          </button>
          <button className={styles.button} type="reset" onClick={() => handleReset(resetForm)}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MoviesListFilter;
