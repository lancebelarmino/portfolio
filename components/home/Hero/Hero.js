import { motion } from 'framer-motion';
import { Section, Button } from '@components/ui';
import { fadeUpVariant } from '@helpers/framer-variants';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Section className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div initial="hidden" animate="visible">
          <motion.h1 className={styles.title} variants={fadeUpVariant} viewport={{ once: true }} custom={4}>
            Lance Belarmino
          </motion.h1>
          <motion.h3 className={styles.subtitle} variants={fadeUpVariant} viewport={{ once: true }} custom={5}>
            Front-end Developer
          </motion.h3>
          <motion.div variants={fadeUpVariant} viewport={{ once: true }} custom={6}>
            <Button className={styles.btn} component="a">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
        <div>
          <picture className={styles.gradient}>
            <source srcSet="./assets/png/gradient-1.png" type="image/webp" />
            <img src="./assets/png/gradient-1.png" alt="Landscape picture" />
          </picture>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
