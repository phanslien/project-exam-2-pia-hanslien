import Tabs from "../../components/tabs/Tabs";
import { useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";

const Dashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setAuth(null);
    navigate("/login");
  };

  return (
    <div>
      <div className="dashboard_content__topSection">
        <HeadingLarge headingLarge="Dashboard" />
        <a className="dashboard_content__logoutButton" onClick={logout}>
          Logout
        </a>
      </div>
      <Tabs />
    </div>
  );
};

export default Dashboard;
