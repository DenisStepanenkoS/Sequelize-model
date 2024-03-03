import { Link } from 'react-router-dom';
import styles from './styles.module.css';
function Header () {
  return (
    <nav>
      <ul className={styles.mainBlock}>
        <li>
          <Link className={styles.linkBlock} to='create/phone'>
            Create phone
          </Link>
        </li>

        <li>
          <Link className={styles.linkBlock} to='/phones'>
            View phones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
