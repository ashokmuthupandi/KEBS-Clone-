import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NotificationsIcon from "@mui/icons-material/Notifications";
import user from "../Assets/User.png";
import no from "../Assets/nomilestone.png"
function VisaTravel() {
  return (
    <>
    <Sidebar />
    <div className="toolbarr">
        <label>Visa and Travel</label>
        <div className="toolbarr-right">
          <NotificationsIcon />
          <img src={user} alt="" />
        </div>
      </div>
      <div className="expenses-text">oops ! No Data Found!</div>
        <div className="expenses-image">
          <img src={no} alt="" />
        </div>
        <div className="button">
          <button>Clear All</button>
        </div>
    </>
  )
}

export default VisaTravel