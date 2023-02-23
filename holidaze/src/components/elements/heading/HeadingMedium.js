import styles from './Heading.module.css';

function HeadingMedium({ headingMedium }) {
  return (
    <>
    <h2 className={styles.heading_medium}>{headingMedium}</h2>
    </>
  );
}

export default HeadingMedium;