import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { createPhoneThunk } from '../../store/slices/phonesList';

export const CreatePhone = ({ createPhoneDB, isFetching, error, phones }) => {
  const initialValues = {
    model: '',
    brand: '',
    dateManufacture: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    createPhoneDB(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field
          placeholder='phone model'
          name='model'
          className={styles.inputPhone}
        />

        <Field
          placeholder='phone brand'
          name='brand'
          className={styles.inputPhone}
        />

        <Field
          type='date'
          name='dateManufacture'
          className={styles.inputPhone}
        />

        <button type='submit' className={styles.addButton}>
          addPhone
        </button>
      </Form>
    </Formik>
  );
};

const mapStateToProps = ({ phonesList }) => phonesList;

const mapDispatchToProps = dispatch => ({
  createPhoneDB: (data) => dispatch(createPhoneThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhone);
