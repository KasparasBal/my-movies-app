import { Formik, Form, Field, FormikValues } from 'formik';
import axios from 'axios';
import { useQuery } from 'react-query';
import TextInputField from 'components/TextInputField/TextInputField';
import SelectField from 'components/SelectField/SelectField';

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

  const fetchGenreData = async () => {
    const { data: genreData } = await axios.get(`http://localhost:3001/genres`);
    return genreData;
  };
  const fetchSortData = async () => {
    const { data: sortData } = await axios.get(`http://localhost:3001/sort-options`);
    return sortData;
  };
  const { data: genreData } = useQuery(['genreData'], fetchGenreData);
  const { data: sortData } = useQuery(['sortData'], fetchSortData);

  const genres = genreData?.genres.map((genre: { name: string; id: string }) => ({
    label: genre.name,
    value: genre.id,
  }));

  const sort = sortData?.map((option: { name: string; code: string }) => ({
    label: option.name,
    value: option.code,
  }));

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, resetForm }) => (
        <Form className={styles.form}>
          <Field
            component={TextInputField}
            id="title"
            name="title"
            placeholder="Enter movie title"
            type="text"
            value={values.title}
            onChange={handleChange('title')}
          />
          <Field
            component={SelectField}
            id="genres"
            name="genres"
            options={genres}
            placeholder="Select genres"
            value={values.genres}
            isMulti
            onChange={(selectedOptions: Array<{ label: string; value: string }>) => {
              handleChange({
                target: {
                  id: 'genres',
                  name: 'genres',
                  value: selectedOptions.map((option: { label: string; value: string }) => ({ label: option.label, value: option.value })),
                },
              });
            }}
          />
          <Field
            component={SelectField}
            id="sort"
            name="sort"
            options={sort}
            placeholder="Select sorting"
            value={values.sort}
            onChange={(selectedOption: { label: string; value: string }) => {
              handleChange({
                target: {
                  id: 'sort',
                  name: 'sort',
                  value: selectedOption,
                },
              });
            }}
          />
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
