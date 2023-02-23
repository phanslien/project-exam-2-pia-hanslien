import styles from './Heading.module.css';

function HeadingLarge({ headingLarge }) {
  return (
    <>
    <h1 className={styles.heading_large}>{headingLarge}</h1>
    </>
  );
}

export default HeadingLarge;