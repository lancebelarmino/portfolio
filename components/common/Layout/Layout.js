import { Navbar, Footer } from '@components/common';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
