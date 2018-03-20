const express = require('express');
const bodyParser = require('body-parser');
const App = express();

//data


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



App.listen(4000, () => {
  console.log('yoohoo! server is started')
});