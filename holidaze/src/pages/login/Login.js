import LoginForm from "../../components/form/login/LoginForm";
import Heading from "../../components/elements/heading/HeadingLarge";
import styles from "./Login.module.css";
const Login = () => {
  return (
  <div>
    <div className={styles.login_heading}>
    <Heading headingLarge="Login"  />
    </div>
    <LoginForm />
  </div>
  );
}

export default Login;