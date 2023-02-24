import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../context/helpers";
import styles from "./Navbar.module.css";



const NavBar = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <nav className={styles.container_navbar}>
        {user ? (
          <>
            <div className={styles.navbar}>
              <div>
                <NavLink to="/">
                  <p className={styles.navbar_logo}>Holidaze</p>
                </NavLink>
              </div>
              <div>
                <ul className={styles.navbar_list}>
                  <li>
                    <NavLink to="/" className={styles.navbar_link}>
                      Home
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/accommodation" className={styles.navbar_link}>
                      Accommodation
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/contact" className={styles.navbar_link}>
                      Contact
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/dashboard" className={styles.navbar_link}>Dashboard</NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/signin" onClick={handleLogout} className={styles.navbar_link}>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navbar}>
              <div>
                <NavLink to="/" exact activeClassName={styles.navbar__link_active}>
                  <p className={styles.navbar_logo}>Holidaze</p>
                </NavLink>
              </div>
              <div>
                <ul className={styles.navbar_list}>
                  <li>
                    <NavLink to="/" className={styles.navbar_link} >
                      Home
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/accommodation" className={styles.navbar_link}>
                      Accommodation
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/contact" className={styles.navbar_link}>
                      Contact
                    </NavLink>
                  </li>
                  <li className={styles.nav__item}>
                    <NavLink to="/signin" className={styles.navbar_link}>
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
