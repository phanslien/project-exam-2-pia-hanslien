const TabContent = ({ id, active, children }) => {
  return active === id ? <div className="tab_content">{children}</div> : null;
};

export default TabContent;
