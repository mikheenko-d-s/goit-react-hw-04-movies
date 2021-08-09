import Navigation from '../Navigation';

import styles from './AppBar.module.scss';

export default function AppBar() {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
}
