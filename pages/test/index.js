import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.box}>
      <h1 className={styles.test}>Test</h1>
      <p>
        A text and a <a href="www.google.com">link</a>
      </p>

      <button type="button">Magic Button</button>
    </div>
  );
}
