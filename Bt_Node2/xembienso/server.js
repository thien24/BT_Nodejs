const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const dataPath = path.join(__dirname, 'vehicle_plates.json');
let vehiclePlates = [];

const loadVehiclePlates = () => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Lỗi khi đọc file JSON:', err);
      return;
    }
    vehiclePlates = JSON.parse(data); // luu du lieu vao bien
  });
};

// goi ham khi server khoi dog
loadVehiclePlates();

app.use(express.static('public')); 

// API để lấy danh sách các tỉnh
app.get('/provinces', (req, res) => {
  const cities = vehiclePlates.map(entry => entry.city); 
  res.json(cities); // danh sach cac province
});

app.get('/plate/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  const entry = vehiclePlates.find(item => item.city.toLowerCase() === city);
  if (entry) {
    res.json({ plate_no: entry.plate_no }); 
  } else {
    res.status(404).json({ error: 'Không tìm thấy tỉnh này' });
  }
});

app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
