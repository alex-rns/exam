const express = require('express');
const bodyParser = require('body-parser');
const App = express();


//data


//Chart HomeSalesReport
const report = {
  year: [150, 216, 168, 105, 66, 105, 105, 153, 123, 195, 161, 51],
  month: [1,4,6,5,8,2,3,7,1,5,3,1,4,6,2,5,1,10,2,5,1,9,8,5,3,13,3,6,9,12,5],
  week: [1, 4, 6, 5, 8, 2, 3]
};

//InboxMessage

const inbox = [
  {
    name: 'Michelle Stewart',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
    date: 'Today, 5:32 PM',
    readed: false,
    img: '/img/MichelleStewart.png'
  },
  {
    name: 'Jolene Slater',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
    date: 'Today, 5:32 PM',
    readed: false,
    img: '/img/JoleneSlater.png'
  },{
    name: 'Lyall Roach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
    date: 'Today, 5:32 PM',
    readed: true,
    img: '/img/LyanRoach.png'
  },{
    name: 'Lyall Roach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
    date: 'Today, 5:32 PM',
    readed: true,
    img: '/img/LyanRoach.png'
  }
];


//Projects

const projects = [
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Wordpress theme",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyanRoach.png',
    id: "user3"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New Logo",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyanRoach.png',
    id: "user3"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyanRoach.png',
    id: "user3"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyanRoach.png',
    id: "user3"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  }


];

//Raport Chart
const raport = [5,10,9,2,7,13,6,8,12,6,4,5,14,12,9,1,12,12,9,2,4,1,6,14,13,6,10,13,14,4,11,12,5,2,12,6,11,4,5,3,6,7,9,14,11,10,7,9,6,8,4,3,14,5,11,2,8,1,9,1,12,9,8,8,11,7,14,7,8,11,5,6,6,4,10,5,13,4,3,5,12,12,1,5,11,4,1,2,2,5,12,3,9,1,1,6,1,13,13,7,11,10,13,5,5,13,9,7,14,6,4,8,5,11,12,13,6,3,4,1,11,5,11,4,13,6,11,2,1,13,5,8,6,5,13,9,6,2,11,4,13,3,7,9,5,14,12,3,4,6,13,10,2,12,7,4,2,2,10,4,8,3,10,6,9,12,8,2,8,9,8,5,6,3,13,12,5,14,2,12,4,11,3,9,5,8,9,11,2,13,9,4,10,1,8,3,13,1,11,14,4,13,3,9,11,1,11,14,2,12,6,12,11,1,4,6,14,7,5,4,10,14,12,11,5,14,13,9,2,3,8,2,12,13,6,2,8,9,5,8,10,4,10,6,13,7,1,6,9,14,5,7,9,11,14,10,9,5,2,12,9,8,8,11,8,12,4,1,2,1,4,1,13,9,12,2,13,12,1,3,5,7,13,7,2,8,1,14,14,14,11,11,12,11,12,8,2,1,10,2,9,14,10,11,7,3,14,5,9,5,14,14,7,12,1,11,11,8,1,13,2,1,10,3,8,4,11,1,2,11,12,3,5,3,11,3,5,4,2,7,5,11,2,14,7,4,10,9,14,1,10,9,14,14,2,7,7,11,9,4,7,11,2,7,7,12,7,8,2,9,6,4,3,12,11,11,11,12,5,3,10,4,5,7,11,9,13,9,11,7,4,9,5,11,12,7,12,5,12,10,1,8,8,10,5,3,8,4,10,10];



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

//Sales Report
App.get('/api/user/report/year', (req, res) => {
  return res.json(report.year)
});

App.get('/api/user/report/month', (req, res) => {
  return res.json(report.month)
});

App.get('/api/user/report/week', (req, res) => {
  return res.json(report.week)
});



//Inbox Messages
App.get('/api/user/messages/inbox', (req, res) => {
  return res.json(inbox)
});


//Projects
App.get('/api/user/projects', (req, res) => {
  return res.json(projects)
});

//Raport
App.get('/api/user/raport', (req, res) => {
  return res.json(raport)
});


App.listen(4000, () => {
  console.log('yoohoo! server is started')
});