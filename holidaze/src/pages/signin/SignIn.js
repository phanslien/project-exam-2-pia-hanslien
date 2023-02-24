
import SignIn from "../../components/form/login/SignInForm";
import Heading from "../../components/elements/heading/HeadingLarge";
import styles from "./SignIn.module.css";

const Login = () => {
  return (
  <div>
    <div className={styles.login_heading}>
    <Heading headingLarge="Login"  />
    </div>
   <SignIn />
  </div>
  );
}

export default Login;