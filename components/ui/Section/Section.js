import clsx from 'clsx';
import styles from './Section.module.scss';

const Section = ({ children, id, className }) => {
  return (
    <section {...(id && { id: id })} className={clsx(styles.section, className)}>
      {children}
    </section>
  );
};

export default Section;
