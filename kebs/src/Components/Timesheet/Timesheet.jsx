import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import user from "../Assets/User.png";
import "./Timesheet.css";
import Tsubmission from "../Tsubmission/Tsubmission";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Timesheet() {
   const navigate = useNavigate();
  const [toolbarLabel, setToolbarLabel] = useState("TimeSheet / Submission");
  const location = useLocation(); // Use useLocation hook
  const userName = location.state?.userName || '';
  const updateToolbarLabel = (newToolbarLabel) => {
    setToolbarLabel(newToolbarLabel);
  };

  const handleClick = (label) => {
    // Update the toolbar label
    updateToolbarLabel(`TimeSheet / ${label}`);
  
    // Remove the "active" class and bottom border from all labels
    const labels = document.querySelectorAll(".navbar label");
    labels.forEach((label) => {
      label.classList.remove("active");
      label.style.borderBottom = "2px solid transparent";
    });
  
    // Add the "active" class and bottom border to the clicked label
    const clickedLabel = document.querySelector(`.navbar label[data-label="${label}"]`);
    clickedLabel.classList.add("active");
  
    // Navigate to the Expenses page with the user's name in the state
    // navigate("/expenses", { state: { userName } });
  };

  return (
    <>
      <Sidebar />
      <div className="toolbar">
        <label>{toolbarLabel}</label>
        <div className="toolbar-right">
          <NotificationsIcon />
          <img src={user} alt="" />
          <label>User:{userName}</label>
        </div>
      </div>
      <div className="navbar">
        <label
          data-label="Submission"
          onClick={() => handleClick("Submission")}
        >
          Submission
        </label>
        <label
          data-label="Approvals"
          onClick={() => handleClick("Approvals")}
        >
          Approvals
        </label>
        <label
          data-label="My Team"
          onClick={() => handleClick("My Team")}
        >
          My Team
        </label>
        <label
          data-label="Remote Workx"
          onClick={() => handleClick("Remote Workx")}
        >
          Remote Workx
        </label>
        <label
          data-label="Project"
          onClick={() => handleClick("Project")}
        >
          Project
        </label>
        <label
          data-label="Oppurtunity"
          onClick={() => handleClick("Oppurtunity")}
        >
          Oppurtunity
        </label>
      </div>
      <Tsubmission />
    </>
  );
}

export default Timesheet;
