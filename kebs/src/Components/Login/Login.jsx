import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import pic1 from "../Assets/login_banner_1.svg";
import pic2 from "../Assets/login_banner_2.svg";
import pic3 from "../Assets/login_banner_3.svg";
import logo from "../Assets/KEBS_logo.svg";


function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('option1');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          setName(result.data.name); 
          navigate("/timesheet", { state: { userName: result.data.name } });
        } else {
          console.log("invalid email");
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const renderContent = () => {
    switch (selectedOption) {
      case 'option1':
        return (
          <div className="carousel-image">
            <img src={pic1} alt="" />
            <label>Sign up for free and improve your business process rapidly</label>
          </div>
        );
      case 'option2':
        return (
          <div className="carousel-image">
            <img src={pic2} alt="" />
            <label>Leverage the power of onboarding all the departments into one platform</label>
          </div>
        );
      case 'option3':
        return (
          <div className="carousel-image">
            <img src={pic3} alt="" />
            <label>Have your data converted into insights!</label>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="login">
     <div className="right">
      <div className="carousel-images">{renderContent()}</div>
      <div className="carousel-image-buttons">
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionChange('option1')}
          />
          
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionChange('option2')}
          />
          
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={() => handleOptionChange('option3')}
          />
          
        </label>
      </div>
        <div className="carousel-footer">
          <p>
            © 2023 Kaar Enterprise Business Suite (KEBS). All Rights Reserved.
          </p>
        </div>
      </div>
      <div class="left">
        <div class="left-img">
          <img src={logo} alt="" />
        </div>
        <div class="left-button">
          <button>Login With Microsoft</button>
        </div>
        <div className="left-signin">
          <span>Or Sign in with</span>
        </div>
        <form onSubmit={handleSubmit}>
        <div class="email">
          <input
           type="email" 
           className="input" 
           placeholder="Email ID*"
           onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div class="next-button">
          <button type="submit">Next</button>
        </div>
        </form>
        <div className="footer">
          <ul className="footer-list">
            <li>
              <a href="/"> Help |</a>
            </li>
            <li>
              <a href="/admin/add"> Privacy Policy |</a>
            </li>
            <li>
              <a href="/admin/add"> Terms </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
