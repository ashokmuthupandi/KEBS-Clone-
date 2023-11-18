import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 81px;
  height: 30px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "gray")};
  background-color: ${(props) => (props.selected ? "#cf0001" : "white")};
`;

const Test = (props) => {
  const [selectedButton, setSelectedButton] = useState("week");

  const handleClick = (button) => {
    setSelectedButton(button);
    props.setSeleectedButton(button);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button
        selected={selectedButton === "week"}
        onClick={() => handleClick("week")}
      >
        Week
      </Button>
      <Button
        selected={selectedButton === "month"}
        onClick={() => handleClick("month")}
      >
        Month
      </Button>
    </div>
  );
};

export default Test;
