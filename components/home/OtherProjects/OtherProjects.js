import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@components/ui';
import { otherProjects } from '@data/projects';
import useMediaQuery from '@hooks/useMediaQuery';
import useMousePosition from '@hooks/useMousePosition';
import Github from '@assets/svg/project-github-sm.svg';
import Website from '@assets/svg/project-website-sm.svg';
import { fadeUpVariant } from '@helpers/framer-variants';
import styles from './OtherProjects.module.scss';

const OtherProjects = () => {
  const [isHoveredItem, setIsHoveredItem] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)', false);
  const { x, y } = useMousePosition();

  const projectItems = otherProjects.map((item, index) => (
    <li key={item.title} className={styles.projectItem}>
      <div className={styles.projectItemWrapper} onMouseEnter={() => setIsHoveredItem(item.id)} onMouseLeave={() => setIsHoveredItem(null)}>
        <motion.a href={item.website} target="_blank" rel="noreferrer" initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={index + 1}>
          <p className={styles.projectTitle}>{item.title}</p>
        </motion.a>

        {isDesktop && (
          <motion.p className={styles.projectDescription} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={index + 3}>
            {item.description}
          </motion.p>
        )}

        <motion.div className={styles.projectLinks} initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={index + 5}>
          <a className={styles.projectLink} href={item.github} target="_blank" rel="noreferrer" onMouseEnter={() => setIsHoveredItem(null)} onMouseLeave={() => setIsHoveredItem(item.id)}>
            <Github />
          </a>
          <a className={styles.projectLink} href={item.website} target="_blank" rel="noreferrer" onMouseEnter={() => setIsHoveredItem(null)} onMouseLeave={() => setIsHoveredItem(item.id)}>
            <Website />
          </a>
        </motion.div>
      </div>

      <motion.hr initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }} custom={index + 1} />

      {isDesktop && isHoveredItem === item.id && (
        <motion.div className={styles.projectHoverElement} variants={fadeUpVariant} initial="hidden" animate="visible">
          <picture className={styles.test}>
            <source srcSet={item.src} type="image/webp" />
            <img className={styles.projectImage} alt="Landscape picture" style={{ transform: `translate(${x - 20}px, ${y - 20}px)` }} />
          </picture>
        </motion.div>
      )}
    </li>
  ));

  console.log(isHoveredItem);

  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <h2>Other Projects</h2>
      </div>
      <hr />
      <ul>{projectItems}</ul>
      <picture className={styles.gradient4}>
        <source srcSet="./assets/png/gradient-4.png" type="image/webp" />
        <img src="./assets/png/gradient-4.png" alt="Landscape picture" />
      </picture>
    </Section>
  );
};

export default OtherProjects;
