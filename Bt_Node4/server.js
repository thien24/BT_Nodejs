const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bookingRoutes = require('./routes/bookings')
const PORT = 3000;
const app = express();

mongoose.connect('mongodb+srv://anhbanh:anhbanh@cluster0.7h9xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/public', express.static('public'));

// Thiết lập view engine
app.set('view engine', 'ejs');

// Route gốc chuyển hướng đến /bookings
app.get('/', (req, res) => {
    res.redirect('/bookings');
});

// Routes
app.use('/bookings', bookingRoutes);


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
