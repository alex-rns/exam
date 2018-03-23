const express = require('express');
const bodyParser = require('body-parser');
const App = express();

//data
const report = {
  year: [150, 216, 168, 105, 66, 105, 105, 153, 123, 195, 161, 51],
  month: [1,4,6,5,8,2,3,7,1,5,3,1,4,6,2,5,1,10,2,5,1,9,8,5,3,13,3,6,9,12,5],
  week: [1, 4, 6, 5, 8, 2, 3]
};


//login
const userExist = {
  name: 'admin',
  pass: '123'
};

App.use(bodyParser.json());

App.post('/api/user', (req, res) => {
  const name = req.body.login;
  const pass = req.body.pass;

  if (userExist.name === name && userExist.pass === pass) {
    return res.json({
      userCheck: 'user exist'
    })
  } else {
    return res.json({
      userCheck: 'user does not exist'
    })
  }
});


App.get('/api/user/report/year', (req, res) => {
  return res.json(report.year)
});

App.get('/api/user/report/month', (req, res) => {
  return res.json(report.month)
});

App.get('/api/user/report/week', (req, res) => {
  return res.json(report.week)
});

App.listen(4000, () => {
  console.log('yoohoo! server is started')
});