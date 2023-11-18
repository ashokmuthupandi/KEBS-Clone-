import React, { useState } from "react";
import "./Sidebar.css";
import logomark from "../Assets/KEBS_logomark.svg";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import FlightIcon from "@mui/icons-material/Flight";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AppsIcon from "@mui/icons-material/Apps";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import InfoIcon from "@mui/icons-material/Info";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CloseIcon from "@mui/icons-material/Close";
import TimerIcon from '@mui/icons-material/Timer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [showSecondarySidebar, setShowSecondarySidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const sidebarList = [
    {
      icon: <AccountBalanceWalletIcon />,
      label: "Expenses",
      path:"/expenses",
    },
    {
      icon: <GolfCourseIcon />,
      label: "OKR",
    },
    {
      icon: <FlightIcon />,
      label: "Visa and Travel",
      path:"/visatravel"
    },
    {
      icon: <AssignmentLateIcon />,
      label: "CTA",
    },
    {
      icon: <ReduceCapacityIcon />,
      label: "RMG",
    },
    {
      icon: <TimerIcon />,
      label: "TimeSheet",
      path:"/timesheet"
    },
  ];

  const secondarySidebarList = [
    {
      icon: (
        <div className="horizontal-icons">
          <input
            className="search-input"
            type="text"
            placeholder="Search apps"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            
          />
          <FormatAlignLeftIcon />
          <InfoIcon />
          <ColorLensIcon />
          <CloseIcon />
        </div>
      ),
    },
    {
      icon: <AssignmentLateIcon />,
      label: "CTA",
    },
    {
      icon: <AccountBalanceWalletIcon />,
      label: "Expenses",
    },
    {
      icon: <GolfCourseIcon />,
      label: "OKR",
    },
    {
      icon: <FlightIcon />,
      label: "Visa and Travel",
    },
    {
      icon: <ReduceCapacityIcon />,
      label: "RMG",
    },
    {
      icon: <HistoryEduIcon />,
      label: "LMS-|",
    },
    {
      icon: <TimerIcon />,
      label: "Timesheet",
    },
    {
      icon: <PeopleAltIcon />,
      label: "My Profile",
    },
    {
      icon: <PaymentsIcon />,
      label: "Payroll",
    },
  ];
  
  const handleMoreAppsClick = () => {
    setShowSecondarySidebar(!showSecondarySidebar);
  };
  return (
    <div
      className={`sidebar ${showSecondarySidebar ? "show-secondary-sidebar" : ""}`}
    >
      <ul>
        <li>
          <img src={logomark} alt="" />
        </li>
        {sidebarList.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>
              {item.icon}
              {item.label}
            </Link >
          </li>
        ))}
        <li onClick={handleMoreAppsClick}>
          <a href="#">
            <AppsIcon /> 
            More apps
          </a>
        </li>
      </ul>
      {showSecondarySidebar && (
        <ul className="secondary-sidebar">
        {secondarySidebarList.map((item, index) => (
          <li key={index}>
            <a href="#">
              <div className="horizontal-icon-label">
                {item.icon}
                {item.label}
              </div>
            </a>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Sidebar;

