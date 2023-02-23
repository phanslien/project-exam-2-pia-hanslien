import styles from './Heading.module.css';

function HeadingSmall({ headingSmall }) {
  return (
    <>
    <h3 className={styles.heading_small}>{headingSmall}</h3>
    </>
  );
}

export default HeadingSmall;