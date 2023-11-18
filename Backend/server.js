const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./Models/Employee');
const Data = require('./Models/Details');
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/kebs");

app.post("/login", (req, res) => {
  const { email } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json({ success: true, name: user.name }); // Access the 'name' field from the user object
      } else {
        res.status(401).json("The email is invalid");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("Server error");
    });
});
app.post('/saveData', async (req, res) => {
  const { userName,selectedMonth, costCenter, selectedLocation, selectedWeek, data } = req.body;

  try {
    const newData = new Data({
      name:userName,
      month: selectedMonth,
      costCenter,
      Location: selectedLocation,
      Week: selectedWeek,
      Dates: data.map(item => ({ date: item.date, value: item.value })),
    });

    await newData.save();

    console.log(newData);

   
    res.json({ message: 'Data received and saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the data' });
  }
});

app.listen(3001, () => {
    console.log("server is running in 3001");
});