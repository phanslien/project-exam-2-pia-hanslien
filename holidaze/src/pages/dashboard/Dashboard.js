import Tabs from "../../components/tabs/Tabs";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard_content__topSection">
        <HeadingLarge headingLarge="Dashboard" />
      </div>
      <Tabs />
    </div>
  );
};

export default Dashboard;
