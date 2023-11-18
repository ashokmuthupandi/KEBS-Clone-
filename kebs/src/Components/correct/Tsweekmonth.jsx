import React, { useState } from "react";
import "./Tsweekmonth.css";
// import SaveIcon from '@mui/icons-material/Save';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import EventIcon from '@mui/icons-material/Event';
// import ShowChartIcon from '@mui/icons-material/ShowChart';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Tsweekmonth = ({ costCenter, onSaveData }) => {
  const [selectedWeek, setSelectedWeek] = useState("");
  const [inputValues, setInputValues] = useState({
    Week1: Array(7).fill(""),
    Week2: Array(7).fill(""),
    Week3: Array(7).fill(""),
    Week4: Array(7).fill(""),
    Week5: Array(3).fill(""), // Week5 has only 3 days
  });

  const handleInputChange = (week, index, value) => {
    // Update the inputValues object with the new value for the corresponding day
    const newInputValues = { ...inputValues };
    newInputValues[week][index] = value;
    setInputValues(newInputValues);
  };

  const generateDates = (week) => {
    const startDate = new Date("2023-01-01"); // Adjust the initial start date as needed
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Adjust the start date based on the selected week
    const adjustedStartDate = new Date(startDate);
    adjustedStartDate.setDate(startDate.getDate() + (parseInt(week.replace("Week", "")) - 1) * 7);

    const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();

    return Array.from({ length: inputValues[week].length }, (_, index) => {
      const currentDate = new Date(adjustedStartDate);
      currentDate.setDate(adjustedStartDate.getDate() + index);

      if (currentDate.getDate() <= daysInMonth) {
        return `${days[currentDate.getDay()]}, ${currentDate.getDate()} Jan`;
      } else {
        // Display February dates for days beyond the end of January
        return `${days[currentDate.getDay()]}, ${currentDate.getDate() - daysInMonth} Feb`;
      }
    });
  };

  const handleSaveClick = () => {
    if (selectedWeek) {
      // Prepare the data to be saved
      const dataToSave = {
        week: selectedWeek,
        Dates: generateDates(selectedWeek),
        inputValues: inputValues[selectedWeek],
        costCenter, // Pass the cost center from the parent component
      };

      // Call the onSaveData function from the parent component
      onSaveData(dataToSave);
    } else {
      alert("Please select a week before saving.");
    }
  };


  return (
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
  );
}

export default Tsweekmonth;
