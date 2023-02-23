import { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import styles from "./Tabs.modules.css";
import HeadingSmall from "../elements/heading/HeadingSmall";
import HeadingMedium from "../elements/heading/HeadingMedium";
import HeadingLarge from "../elements/heading/HeadingLarge";
import FetchData from "../../hooks/FetchHotels";
import TabContentOne from "./tabContent/tabContentOne";
import TabContentTwo from "./tabContent/TabContentTwo";
import TabContentThree from "./tabContent/TabContentThree";

const Tabs = () => {
  const [active, setActive] = useState("tab_one");

  return (
    <div className={styles.container}>
      <div className="dashboard_tab__container">
        <ul className="dashboard_tabs__navigation">
          <TabNavItem
            tabTitle="Overview"
            id="tab_one"
            active={active}
            setActive={setActive}
          />
          <TabNavItem
            tabTitle="Contact entries"
            id="tab_two"
            active={active}
            setActive={setActive}
          />
          <TabNavItem
            tabTitle="Enquiries"
            id="tab_three"
            active={active}
            setActive={setActive}
          />
          <TabNavItem
            tabTitle="Establishments"
            id="tab_four"
            active={active}
            setActive={setActive}
          />
        </ul>
        <div>
          <TabContent id="tab_one" active={active}>
            <HeadingMedium headingMedium="Overview" />
            <div className="dashboard_tabs__content">
              <p className="tab_content__text">
               Hello
              </p>
            </div>
          </TabContent>
          <TabContent id="tab_two" active={active}>
            <HeadingMedium headingMedium="Contact entires" />
            <ul>
              <div className="tab_content__text">
              <TabContentOne />
              </div>
            </ul>
          </TabContent>
          <TabContent id="tab_three" active={active}>
            <HeadingMedium headingMedium="Enquires" />
            <div>
            <TabContentTwo />
            </div>
          </TabContent>
          <TabContent id="tab_four" active={active}>
            <HeadingMedium headingMedium="Establishments" />
            <HeadingSmall headingSmall="Add new establishment" />
            <TabContentThree />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
