import { useState } from "react";
import "./ToggleSwitch.styles.css";

function ToggleSwitch({ status: defaultStatus, handleToggleChange }) {
  const [status, setStatus] = useState(defaultStatus);
  const handleToggle = () => {
    const newStatus = status === "active" ? "inactive" : "active";
    setStatus(newStatus);
    handleToggleChange(newStatus);
  };
  return (
    <label className='switch'>
      <input type='checkbox' checked={status === "active"} onChange={handleToggle} />
      <span className='slider round'></span>
    </label>
  );
}

export default ToggleSwitch;
