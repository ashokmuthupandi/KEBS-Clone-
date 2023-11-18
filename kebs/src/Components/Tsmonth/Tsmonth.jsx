import React from "react";

function Tsmonth() {
  const handleInputChange = (e) => {
    // Add some debugging code to log the input value to the console
    console.log(e.target.value);

    // Set the background color of the input field depending on the value
    if (parseInt(e.target.value) === 8) {
      e.target.style.backgroundColor = "#6ab04c";
      e.target.style.borderColor = "#6ab04c";
    } else if (e.target.value === "WO") {
      e.target.style.backgroundColor = "d1d8e0";
      e.target.style.borderColor = "d1d8e0";
    } else {
      e.target.style.backgroundColor = "";
    }
  };
  return (
    <>
      <div className="weekanswer">
        <div className="weekanswer-top">
          <nav className="selected-week">
            <ul>
              <li>Week1</li>
              <li>Sun, 1 Jan</li>
              <li>Mon, 2 Jan</li>
              <li>Tue, 3 Jan</li>
              <li>Wed, 4 Jan</li>
              <li>Thu, 5 Jan</li>
              <li>Fri, 6 Jan</li>
              <li>Sat, 7 Jan</li>
              <li>Submitted</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekpost">
        <div className="weekpost-down">
          <nav className="forweek1answer">
            <ul>
              <li>CostCentre:</li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekanswer">
        <div className="weekanswer-top">
          <nav className="selected-week">
            <ul>
              <li>Week2</li>
              <li>Sun, 8 Jan</li>
              <li>Mon, 9 Jan</li>
              <li>Tue, 10 Jan</li>
              <li>Wed, 11 Jan</li>
              <li>Thu, 12 Jan</li>
              <li>Fri, 13 Jan</li>
              <li>Sat, 14 Jan</li>
              <li>Submitted</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekpost">
        <div className="weekpost-down">
          <nav className="forweek1answer">
            <ul>
              <li>CostCentre:</li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekanswer">
        <div className="weekanswer-top">
          <nav className="selected-week">
            <ul>
              <li>Week3</li>
              <li>Sun, 15 Jan</li>
              <li>Mon, 16 Jan</li>
              <li>Tue, 17 Jan</li>
              <li>Wed, 18 Jan</li>
              <li>Thu, 19 Jan</li>
              <li>Fri, 20 Jan</li>
              <li>Sat, 21 Jan</li>
              <li>Submitted</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekpost">
        <div className="weekpost-down">
          <nav className="forweek1answer">
            <ul>
              <li>CostCentre:</li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekanswer">
        <div className="weekanswer-top">
          <nav className="selected-week">
            <ul>
              <li>Week4</li>
              <li>Sun, 22 Jan</li>
              <li>Mon, 23 Jan</li>
              <li>Tue, 24 Jan</li>
              <li>Wed, 25 Jan</li>
              <li>Thu, 26 Jan</li>
              <li>Fri, 27 Jan</li>
              <li>Sat, 28 Jan</li>
              <li>Submitted</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekpost">
        <div className="weekpost-down">
          <nav className="forweek1answer">
            <ul>
              <li>CostCentre:</li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekanswer">
        <div className="weekanswer-top">
          <nav className="selected-week">
            <ul>
              <li>Week5</li>
              <li>Sun, 29 Jan</li>
              <li>Mon, 30 Jan</li>
              <li>Tue, 31 Jan</li>
              <li style={{ color: "#2c3a47" }}>Sun,29 Jan</li>
              <li style={{ color: "#2c3a47" }}>Mon,30 Jan</li>
              <li style={{ color: "#2c3a47" }}>Tue,31 Jan</li>
              <li style={{ color: "#2c3a47" }}>Sun,29 Jan</li>
              <li>Submitted</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="weekpost">
        <div className="weekpost-down">
          <nav className="forweek1answer">
            <ul>
              <li>CostCentre:</li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
              <li>
                <input onChange={handleInputChange} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Tsmonth;
