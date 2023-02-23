import styles from './ButtonPrimary.module.css';

function ButtonPrimary({ buttonPrimary }) {
  return (
    <>
    <button className={styles.button_primary}>{buttonPrimary}</button>
    </>
  );
}

export default ButtonPrimary;

