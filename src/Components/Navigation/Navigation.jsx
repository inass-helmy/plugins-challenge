import { NavLink } from "react-router-dom";
import "./Navigation.styles.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useState } from "react";

function Navigation({ onDisableHandler }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleToggleChange = () => {
    setIsDisabled(!isDisabled);
    onDisableHandler(isDisabled);
  };

  return (
    <nav className='navigation-wrapper'>
      <h1>
        <span>Data</span>Guard
      </h1>
      <NavLink to='/marketing'>Marketing</NavLink>
      <NavLink to='/finance'>Finance</NavLink>
      <NavLink to='/personnel'>Personnel</NavLink>
      <div className='all-plugins'>
        <p>All plugins disabled</p>
        <ToggleSwitch
          status={isDisabled ? "inactive" : "active"}
          handleToggleChange={handleToggleChange}
        />
      </div>
      <div className={`gradient-background ${!isDisabled ? "enabled" : "disabled"}`} />
    </nav>
  );
}

export default Navigation;
