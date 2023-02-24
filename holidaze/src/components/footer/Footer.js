import styles from "./Footer.module.css";
import { Footer } from "antd/es/layout/layout";

function FooterOne() {
  return (
    <>
      <Footer className={styles.footer}>
        <p>Hello</p>
        <p>World</p>
      </Footer>
    </>
  );
}

export default FooterOne;
