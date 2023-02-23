const TabNavItem = ({ id, tabTitle, active, setActive }) => {
  const handleClick = () => {
    setActive(id);
  };

  return (
    <li onClick={handleClick} className={active === id ? "active" : ""}>
      {tabTitle}
    </li>
  );
};
export default TabNavItem;
