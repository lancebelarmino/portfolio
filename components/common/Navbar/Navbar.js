import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@components/ui';
import Logo from '@assets/svg/logo.svg';
import ExternalLink from '@assets/svg/arrow-right-up.svg';
import useMediaQuery from '@hooks/useMediaQuery';
import { mobileLinks, desktopLinks } from '@data/links';
import { mobileMenuVariant, hamburgerBarVariant, fadeUpVariant, logoVariant } from '@helpers/framer-variants';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isFirstMenuLoad, setIsFirstMenuLoad] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1365px)', false);

  const hamburgerMenu = (
    <motion.div initial="hidden" animate="visible" exit="exit">
      <Button key="hamburger-menu" variant="unstyled" onClick={() => setIsMobileMenuOpen(true)}>
        <motion.svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.rect width="20" height="2" rx="1" fill="#495057" custom={0} variants={hamburgerBarVariant} />
          <motion.rect y="6" width="20" height="2" rx="1" fill="#495057" custom={1} variants={hamburgerBarVariant} />
          <motion.rect y="12" width="20" height="2" rx="1" fill="#495057" custom={2} variants={hamburgerBarVariant} />
        </motion.svg>
      </Button>
    </motion.div>
  );

  const mobileMenuItems = mobileLinks.map((item) => (
    <li key={item.name} className={styles.menuItem}>
      <a
        className={clsx(styles.menuLink, { [styles.mobileMenuExternalLink]: item.isExternalLink })}
        href={item.url}
        onClick={() => setIsMobileMenuOpen(false)}
        {...(item.isExternalLink && { target: '_blank', rel: 'noreferrer' })}>
        {item.name}
        {item.isExternalLink && <ExternalLink />}
      </a>
    </li>
  ));

  const mobileMenu = (
    <motion.nav className={styles.mobileMenu} initial="hidden" animate="visible" exit="exit" variants={mobileMenuVariant}>
      <ul className={styles.mobileMenuList}>{mobileMenuItems}</ul>

      <Button className={styles.mobileMenuCloseBtn} variant="unstyled" onClick={() => setIsMobileMenuOpen(false)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.0001 8.82167L14.1251 4.69667L15.3034 5.875L11.1784 10L15.3034 14.125L14.1251 15.3033L10.0001 11.1783L5.87511 15.3033L4.69678 14.125L8.82178 10L4.69678 5.875L5.87511 4.69667L10.0001 8.82167Z"
            fill="#495057"
          />
        </svg>
      </Button>
    </motion.nav>
  );

  const desktopMenuItems = desktopLinks.map((item, index) => (
    <motion.li key={item.name} className={styles.menuItem} variants={fadeUpVariant} initial="hidden" animate="visible" exit="exit" custom={isFirstMenuLoad ? index + 3 : index + 0.5}>
      <a className={styles.menuLink} href={item.url}>
        {item.name}
      </a>
    </motion.li>
  ));

  const desktopMenu = (
    <motion.nav key="desktop-menu">
      <ul className={styles.desktopMenuList}>{desktopMenuItems}</ul>
    </motion.nav>
  );

  useEffect(() => {
    if (!isTablet) {
      setIsMobileMenuOpen(false);
    }
  }, [isTablet]);

  useEffect(() => {
    setIsFirstMenuLoad(false);
  }, []);

  return (
    <div className={styles.navbar}>
      <motion.a href="#home" variants={logoVariant} initial="hidden" animate="visible" exit="exit">
        <Logo />
      </motion.a>

      <AnimatePresence exitBeforeEnter>{isTablet ? hamburgerMenu : desktopMenu}</AnimatePresence>

      <AnimatePresence>{isTablet && isMobileMenuOpen && mobileMenu}</AnimatePresence>
    </div>
  );
};

export default Navbar;
