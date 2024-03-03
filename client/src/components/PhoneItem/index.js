import { connect } from 'react-redux';

import styles from './styles.module.css';
import { deletePhoneThunk } from '../../store/slices/phonesList';

function PhoneItem ({ phone, deletePhone }) {

  return (
    <div className={styles.phoneItem}>
      <p className={styles.phoneModel}>{phone.model}</p>
      <p className={styles.phoneBrand}>{phone.brand}</p>
      <p className={styles.manafactureDate}>{phone.dateManufacture}</p>
      <button onClick={() => deletePhone(phone.id)}>X</button>
    </div>
  );
}


const mapDispatchToProps = dispath => ({
  deletePhone: (id) => dispath(deletePhoneThunk(id)),
});

export default connect(null, mapDispatchToProps)(PhoneItem);
