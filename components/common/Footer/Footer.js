import Logo from '@assets/svg/logo.svg';
import { workLinks, socialLinks, contactLinks } from '@data/links';
import styles from './Footer.module.scss';

const Footer = () => {
  const workMenuItems = workLinks.map((item) => (
    <li key={item.name} className={styles.footerMenuItem}>
      <a className={styles.footerMenuLink} href={item.url} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </li>
  ));

  const socialMenuItems = socialLinks.map((item) => (
    <li key={item.name} className={styles.footerMenuItem}>
      <a className={styles.footerMenuLink} href={item.url} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </li>
  ));

  const contactMenuItems = contactLinks.map((item) => (
    <li key={item.name} className={styles.footerMenuItem}>
      <a className={styles.footerMenuLink} href={item.url} target="_blank" rel="noreferrer">
        {item.name}
      </a>
    </li>
  ));

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.col1}>
          <Logo className={styles.logo} />
          <p className={styles.copyright}>© 2022 Lance Belarmino</p>
        </div>

        <div className={styles.col2}>
          <h6 className={styles.footerMenuTitle}>Work</h6>
          <ul className={styles.footerMenuList}>{workMenuItems}</ul>
        </div>

        <div className={styles.col3}>
          <h6 className={styles.footerMenuTitle}>Socials</h6>
          <ul className={styles.footerMenuList}>{socialMenuItems}</ul>
        </div>

        <div className={styles.col4}>
          <h6 className={styles.footerMenuTitle}>Contacts</h6>
          <ul className={styles.footerMenuList}>{contactMenuItems}</ul>
        </div>
      </div>

      <div className={styles.test}></div>
    </footer>
  );
};

export default Footer;
