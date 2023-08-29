import "./PluginItem.styles.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useState } from "react";

function PluginItem({ title, description, toggleSwitchStatus, isDisabled, onToggleHandler }) {
  const statusWordMapping = {
    active: "Allowed",
    inactive: "Blocked",
  };

  const [statusWord, setStatusWord] = useState(statusWordMapping[toggleSwitchStatus]);

  const handler = (status) => {
    setStatusWord(status);
    onToggleHandler(status);
  };

  return (
    <div className={`pluginItem-card ${isDisabled && "disable"}`}>
      <div className='header-container'>
        <h4>{title}</h4>
        <div className='switch-container'>
          <ToggleSwitch status={toggleSwitchStatus} handleToggleChange={handler} />
          <span className={statusWord}>{statusWordMapping[statusWord]}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default PluginItem;
