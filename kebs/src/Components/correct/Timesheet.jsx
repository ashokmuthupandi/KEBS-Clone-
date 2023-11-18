import React, { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveIcon from '@mui/icons-material/Save';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import EventIcon from '@mui/icons-material/Event';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import approver1 from '../Assets/User.png';
import approver2 from '../Assets/User.png';
import approver3 from '../Assets/User.png';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TodayIcon from "@mui/icons-material/Today";
import Test from "../Test/Test";
import Tsmonth from "../Tsmonth/Tsmonth";
import './Tsubmission.css'; // Import your CSS file

const NavbarCalender = (props) => {
  const [monthBoxVisible, setMonthBoxVisible] = useState(false);
  const monthBoxRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [costCenter, setCostCenter] = useState(''); // State for cost center
  const locations = ['Home(WH)-India', 'Chennai-HO', 'Oman-Onsite', 'Qatar-Onsite', 'Kuwait-Onsite', 'Bahrain-Onsite'];
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("week");
  const [selectedWeek, setSelectedWeek] = useState("");
  const [inputValues, setInputValues] = useState({
    Week1: Array(7).fill(""),
    Week2: Array(7).fill(""),
    Week3: Array(7).fill(""),
    Week4: Array(7).fill(""),
    Week5: Array(3).fill(""), // Week5 has only 3 days
  });
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const sendSelectedDataToBackend = () => {
    // Create an object containing the data to send to the backend
    const data = {
      selectedMonth,
      costCenter,
      selectedLocation,
      selectedWeek,
      data: generateDates(selectedWeek).map((date, index) => ({
        date,
        value: inputValues[selectedWeek][index],
      })),
    };

    // Make an HTTP request to your backend API to send the data
    fetch("http://localhost:3001/saveData", {
      method: "POST", // Assuming you're using a POST request
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // The request was successful; you can handle the response here
        } else {
          // The request failed; you can handle errors here
        }
      })
      .catch((error) => {
        // Handle network errors here
      });
  };

  const handleSaveClick = () => {
    // Ensure a month is selected before saving
    if (selectedMonth && costCenter && selectedLocation) {
      // Call the callback function to send the selected month, costCenter, and selectedLocation to the backend
      sendSelectedDataToBackend();
      alert("Data sent to the backend");
    } else if (!selectedMonth) {
      alert("Please select a month before saving.");
    } else if (!costCenter) {
      alert("Please select a Costcentre before saving.");
    } else if (!selectedLocation) {
      alert("Please select a Location before saving.");
    }
  };
  const fullMonthNames = [
    "January 2023",
    "February 2023",
    "March 2023",
    "April 2023",
    "May 2023",
    "June 2023",
    "July 2023",
    "August 2023",
    "September 2023",
    "October 2023",
    "November 2023",
    "December 2023",
  ];

  const handleClickTodayIcon = () => {
    setMonthBoxVisible(!monthBoxVisible);
  };

  const handleMonthClick = (event) => {
    if (
      event.target.classList.contains("Navbar-calender-month-box-list-item")
    ) {
      const clickedMonthIndex = event.target.dataset.monthIndex;
      const selectedMonth = fullMonthNames[clickedMonthIndex];

      setSelectedMonth(selectedMonth);

      document.querySelector(".Navbar-calender-month-text").textContent =
        selectedMonth;

      setMonthBoxVisible(false);
    }
  };

  const handleDocumentClick = (event) => {
    if (monthBoxRef.current && !monthBoxRef.current.contains(event.target)) {
      setMonthBoxVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);



  const handleInputChange = (week, index, value) => {
    // Update the inputValues object with the new value for the corresponding day
    const newInputValues = { ...inputValues };
    newInputValues[week][index] = value;
    setInputValues(newInputValues);
  };

  const generateDates = (week) => {
    if (!selectedMonth) {
      return [];
    }
  
    const startDate = new Date(`${selectedMonth} 1, 2023`);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    // Adjust the start date based on the selected week
    const adjustedStartDate = new Date(startDate);
    adjustedStartDate.setDate(
      startDate.getDate() + (parseInt(week.replace("Week", "")) - 1) * 7
    );
  
    const daysInMonth = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      0
    ).getDate();
  
    return Array.from({ length: inputValues[week].length }, (_, index) => {
      const currentDate = new Date(adjustedStartDate);
      currentDate.setDate(adjustedStartDate.getDate() + index);
  
      if (currentDate.getDate() <= daysInMonth) {
        const abbreviatedMonth = currentDate.toLocaleString('default', { month: 'short' });
        return `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${abbreviatedMonth}`;
      } else {
        // Display the next month's dates for days beyond the end of the current month
        const nextMonth = startDate.getMonth() + 1 > 11 ? 0 : startDate.getMonth() + 1;
        const abbreviatedNextMonth = fullMonthNames[nextMonth].slice(0, 3);
        return `${days[currentDate.getDay()]}, ${currentDate.getDate() - daysInMonth} ${abbreviatedNextMonth}`;
      }
    });
  };
  
  //return starts
  return (
    <>
      <div className="Navbar-calender">
        <div className="navbar-calender-month">
          <div className="Navbar-calender-icon">
            <KeyboardArrowLeftIcon />
          </div>
          <div className="Navbar-calender-text">For:</div>
          <div className="Navbar-calender-month-text">Select the Month</div>
          <div className="Navbar-calender-month-icon">
            <TodayIcon onClick={handleClickTodayIcon} />
          </div>
          <div className="Navbar-calender-icon">
            <KeyboardArrowRightIcon />
          </div>
        </div>

        <div
          ref={monthBoxRef}
          className={`Navbar-calender-month-box ${
            monthBoxVisible ? "visible" : ""
          }`}
          onClick={handleMonthClick}
        >
          <div className="Navbar-calender-month-box-header">Year: 2023</div>
          <ul className="Navbar-calender-month-box-list">
            {[
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ].map((month, index) => (
              <li
                key={month}
                className="Navbar-calender-month-box-list-item"
                data-month-index={index}
              >
                {month}
              </li>
            ))}
          </ul>
        </div>

        {monthBoxVisible && (
          <div
            className="Navbar-calender-month-box-overlay"
            onClick={handleDocumentClick}
          />
        )}
        <div className="Image">
          <div className="row">
            <div className="circle1">
              <p>0</p>
            </div>
            <div className="circle2">
              <p>0</p>
            </div>
            <div className="circle3">
              <p>208</p>
            </div>
          </div>
        </div>
        <div className="Navbar-test">
          <Test setSeleectedButton={setSelectedButton} />
        </div>
        <div className="navabr-subicons">
          <div className="expenses-button">
            <div className="icon-container" onClick={handleSaveClick}>
              <SaveIcon />
              <div className="tooltip">Save</div>
            </div>
            <div className="icon-container">
              <DoneAllIcon />
              <div className="tooltip">Submit</div>
            </div>
            <div className="icon-container">
              <FlashOnIcon />
              <div className="tooltip">QuickFill</div>
            </div>
            <div className="icon-container">
              <EventIcon />
              <div className="tooltip">Calendar</div>
            </div>
            <div className="icon-container">
              <ShowChartIcon />
              <div className="tooltip">Summary</div>
            </div>
            <div className="icon-container">
              <VisibilityOffIcon />
              <div className="tooltip">Hide Header</div>
            </div>
            <div className="icon-container">
              <MoreHorizIcon />
              <div className="tooltip">More Actions</div>
            </div>
            <div className="icon-container">
              <HelpOutlineIcon />
              <div className="tooltip">Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-costcentre">
          <label>Cost Centre:</label>
          <input
            type="text"
            placeholder="Search Cost Centre"
            value={costCenter}
            onChange={(e) => setCostCenter(e.target.value)} // Update cost center state
          />
        </div>
        <div className="header-location">
          <label>Location:</label>
          <div className={`location-input-container ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search Location"
              value={selectedLocation}
              onClick={toggleDropdown}
            />
            <ArrowDropDownIcon className="header-location-img" onClick={toggleDropdown} />
          </div>
          {isDropdownOpen && (
            <div className="location-dropdown">
              {locations.map((location) => (
                <div
                  key={location}
                  className="location-item"
                  onClick={() => handleLocationSelection(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="header-approvars">
          <label>Approvers:</label>
          <img src={approver1} alt="" />
          <img src={approver2} alt="" />
          <img src={approver3} alt="" />
        </div>
      </div>
      <div className="timesheet-weekmonth">
        {selectedButton === "week" && 
          <>
          <div className="weekmonth">
            <nav>
              <ul>
                {["Week1", "Week2", "Week3", "Week4", "Week5"].map(
                  (week, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor:
                          selectedWeek === week ? "#ffc8c8" : "#ffffff",
                      }}
                      onClick={() => setSelectedWeek(week)}
                    >
                      {week}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className={`weekanswer${selectedWeek === "Week5" ? " week5-style" : ""}`}>
            <div className="weekanswer-top">
              <nav className="selected-week">
                <ul>
                  {selectedWeek && (
                    <>
                      <li>{selectedWeek}</li>
                      {generateDates(selectedWeek).map((date, index) => (
                        <li key={index}>{date}</li>
                      ))}
                      <li>Submitted</li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
    
          <div className="weekpost">
            <div className="weekpost-down">
              {selectedWeek && (
                <nav className="forweek1answer">
                  <ul>
                    <li>CostCentre: {costCenter}</li>
                    {inputValues[selectedWeek].map((value, index) => (
                      <li key={index}>
                        <input
                          value={value}
                          onChange={(e) =>
                            handleInputChange(selectedWeek, index, e.target.value)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </>
        }
        {selectedButton === "month" && <Tsmonth />}
      </div>
    </>
  );
};

export default NavbarCalender;
