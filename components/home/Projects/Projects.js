import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Section } from '@components/ui';
import Github from '@assets/svg/project-github.svg';
import Website from '@assets/svg/project-website.svg';
import { leftColProjects, rightColProject } from '@data/projects';
import { fadeUpVariant } from '@helpers/framer-variants';
import styles from './Projects.module.scss';

const Projects = () => {
  const leftColItems = leftColProjects.map((item) => (
    <div key={item.title} className={clsx(styles.project, styles.leftColProject)}>
      <motion.a
        className={styles.projectImgLink}
        href={item.website}
        target="_blank"
        rel="noreferrer"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariant}
        viewport={{ once: true }}
        custom={1}>
        <picture>
          <source media="(min-width:1024px)" srcSet={item.desktopSrc} type="image/jpg" />
          <source media="(max-width:1023px)" srcSet={item.mobileSrc} type="image/jpg" />
          <img className={styles.projectImg} alt={`${item.title} Photo`} />
        </picture>
      </motion.a>

      <div className={styles.info}>
        <motion.div className={styles.infoHeader} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={1}>
          <a href={item.website} target="_blank" rel="noreferrer">
            <h2>{item.title}</h2>
          </a>
          <div className={styles.infoLinks}>
            <a className={styles.infoLink} href={item.github} target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a className={styles.infoLink} href={item.website} target="_blank" rel="noreferrer">
              <Website />
            </a>
          </div>
        </motion.div>
        <motion.ul className={styles.techStack} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={1}>
          {item.techStack.map((item) => (
            <li key={item} className={styles.techStackItem}>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  ));

  const rightColItems = rightColProject.map((item, index) => (
    <div key={item.title} className={clsx(styles.project, styles.rightColProject)}>
      <motion.a
        className={styles.projectImgLink}
        href={item.website}
        target="_blank"
        rel="noreferrer"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariant}
        viewport={{ once: true }}
        custom={3}>
        <picture>
          <source media="(min-width:1024px)" srcSet={item.desktopSrc} type="image/jpg" />
          <source media="(max-width:1023px)" srcSet={item.mobileSrc} type="image/jpg" />
          <img className={styles.projectImg} alt={`${item.title} Photo`} />
        </picture>
      </motion.a>

      <div className={styles.info}>
        <motion.div className={styles.infoHeader} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={3}>
          <a href={item.website} target="_blank" rel="noreferrer">
            <h2>{item.title}</h2>
          </a>
          <div className={styles.infoLinks}>
            <a className={styles.infoLink} href={item.github} target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a className={styles.infoLink} href={item.website} target="_blank" rel="noreferrer">
              <Website />
            </a>
          </div>
        </motion.div>
        <motion.ul className={styles.techStack} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={3}>
          {item.techStack.map((item) => (
            <li key={item} className={styles.techStackItem}>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  ));

  return (
    <Section id="projects" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.leftCol}>{leftColItems}</div>

        <div className={styles.rightCol}>{rightColItems}</div>
      </div>

      <picture className={styles.gradient}>
        <source srcSet="./assets/png/gradient-3.png" type="image/webp" />
        <img src="./assets/png/gradient-3.png" alt="Landscape picture" />
      </picture>
    </Section>
  );
};

export default Projects;
