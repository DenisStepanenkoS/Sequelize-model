import { connect } from 'react-redux';
import { getPhoneThunk } from '../../store/slices/phonesList';
import PhoneItem from '../../components/PhoneItem';
import styles from './styles.module.css';
import { useEffect } from 'react';
function ViewPhones ({ getPhones, isFetching, phones, error }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      {isFetching && <div>LOADING</div>}
      {error && <div>ERROR</div>}
      {!error && !isFetching && (
        <main className={styles.PhonesField}>
          {phones.map(phone => (
            <PhoneItem key={phone.id} phone={phone} />
          ))}
        </main>
      )}
    </>
  );
}
const mapStateToProps = ({ phonesList }) => phonesList;
const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhoneThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPhones);
