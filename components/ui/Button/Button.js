import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ children, className, component: Component = 'button', variant = 'default', ...domProps }) => {
  return (
    <motion.div {...(variant === 'default' && { whileHover: { y: -4 }, transition: { duration: 0.15 } })}>
      <Component className={clsx(styles[variant], className)} {...domProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
