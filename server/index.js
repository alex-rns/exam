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
    img: '/img/LyallRoach.png'
  },{
    name: 'Lyall Roach',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
    date: 'Today, 5:32 PM',
    readed: true,
    img: '/img/LyallRoach.png'
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
    userImg: '/img/LyallRoach.png',
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
    userImg: '/img/LyallRoach.png',
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
    userImg: '/img/LyallRoach.png',
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
    userImg: '/img/LyallRoach.png',
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


App.listen(4000, () => {
  console.log('yoohoo! server is started')
});