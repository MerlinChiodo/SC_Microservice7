const express = require('express');
const app = express();
const port = 5000;


const tariff = require('./routes/external/tariff.js')
const aboutUs = require('./routes/external/aboutUs.js')
const event = require('./routes/external/event.js')
const course = require('./routes/internal/course.js')
const employee = require('./routes/internal/employee.js')
const member = require('./routes/internal/member.js')
const updateLandingpage = require('./routes/internal/updateLandingpage.js')
var history = require('connect-history-api-fallback');


app.use('/api/tariff', tariff)
app.use('/api/aboutUs', aboutUs)
app.use('/api/event', event)
app.use('/api/course', course)
app.use('/api/employee', employee)
app.use('/api/member', member)
app.use('/api/updateLandingpage', updateLandingpage)


app.use(history());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Fitnessstudio-backend started at http://localhost:${port}`);
  });