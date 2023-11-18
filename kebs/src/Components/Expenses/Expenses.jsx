import React from "react";
import "./Expenses.css";
import Sidebar from "../Sidebar/Sidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import user from "../Assets/User.png";
import LoopIcon from "@mui/icons-material/Loop";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import noexpenses from "../Assets/noExpenses.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Expenses() {
  const navigate = useNavigate();
  
  const location = useLocation();
const userName = location.state?.userName || '';

const handleClick = (label) => {
  

  // Navigate to the Expenses page with the user's name in the state
  navigate("/timesheet", { state: { userName } });
};
  
  return (
    <>
      <Sidebar />
      <div className="expenses-container">
      <div className="toolbarr">
        <label>Expenses</label>
        <div className="toolbarr-right">
          <NotificationsIcon />
          <img src={user} alt="" />
          <label>User: {userName}</label>
        </div>
      </div>
        <div class="expenses-search-container">
          <input
            type="text"
            placeholder="Search Expenses"
            id="search-expenses"
          />
          <div class="expenses-button">
            <LoopIcon />
            <DonutLargeIcon />
            <AddCircleOutlineIcon />
            <NewReleasesIcon />
          </div>
        </div>
        <div className="expenses-text">No Expenses Found !</div>
        <div className="expenses-image">
          <img src={noexpenses} alt="" />
        </div>
        <div className="button">
          <button>New Claim</button>
        </div>
      </div>
    </>
  );
}

export default Expenses;
