import { motion } from 'framer-motion';
import { Section, Button, TechStack } from '@components/ui';
import techStack from '@data/tech-stack';
import { fadeUpVariant } from '@helpers/framer-variants';
import styles from './About.module.scss';

const About = () => {
  const techStackItems = techStack.map((item) => (
    <motion.li key={item.label} className={styles.techStackItem} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={4}>
      <TechStack logo={item.logo} styledLogo={item.styledLogo} label={item.label} />
    </motion.li>
  ));

  return (
    <Section id="about" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <picture>
            <source srcSet="/assets/png/lance.png" type="image/png" />
            <motion.img
              className={styles.portrait}
              alt="Landscape picture"
              width={160}
              height={160}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariant}
              viewport={{ once: true }}
              custom={1}
            />
          </picture>
          <motion.p className={styles.text} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={2}>
            Lance is a web designer turned front-end developer specializing in building apps and websites using React. Currently a freelancer and is working with several crypto projects and on an app
            called Calometer.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={3}>
            <Button>Download Resume</Button>
          </motion.div>
        </div>

        <ul className={styles.techStackList}>{techStackItems}</ul>
      </div>

      <picture className={styles.gradient}>
        <source srcSet="./assets/png/gradient-2.png" type="image/webp" />
        <img src="./assets/png/gradient-2.png" alt="Landscape picture" />
      </picture>
    </Section>
  );
};

export default About;
