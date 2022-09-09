import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@hooks/useMediaQuery';
import styles from './TechStack.module.scss';

const techStackLabelVariant = {
  hidden: { y: 5, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  exit: { y: 5, opacity: 0, transition: { duration: 0.25 } },
};

const techStackIconVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const TechStack = ({ logo: Logo, styledLogo: StyledLogo, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1365px)', false);

  const mobileContent = (
    <>
      {Logo && <Logo className={styles.logo} />}

      <p className={styles.label}>{label && label}</p>
    </>
  );

  const desktopContent = (
    <>
      <div>
        <StyledLogo className={styles.logo} onMouseEnter={() => setIsHovered(true)} />
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={techStackIconVariant}>
            <Logo className={styles.hoveredLogo} onMouseLeave={() => setIsHovered(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <div className={styles.label}>
            <motion.p initial="hidden" animate="visible" exit="exit" variants={techStackLabelVariant}>
              {label && label}
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </>
  );

  return <div className={styles.section}>{isTablet ? mobileContent : desktopContent}</div>;
};

export default TechStack;
