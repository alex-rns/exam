const express = require("express");
const bodyParser = require("body-parser");
const App = express();


//Chart HomeSalesReport
const report = {
  year: [150, 216, 168, 105, 66, 105, 105, 153, 123, 195, 161, 51],
  month: [1, 4, 6, 5, 8, 2, 3, 7, 1, 5, 3, 1, 4, 6, 2, 5, 1, 10, 2, 5, 1, 9, 8, 5, 3, 13, 3, 6, 9, 12, 5],
  week: [1, 4, 6, 5, 8, 2, 3]
};

//InboxMessage

const inbox = [
  {
    name: "Michelle Stewart",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: false,
    img: "/img/MichelleStewart.png"
  },
  {
    name: "Jolene Slater",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Yesterday, 8:30 PM",
    readed: false,
    img: "/img/JoleneSlater.png"
  },
  {
    name: "Lyan Roach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "1 April, 0:52 AM",
    readed: true,
    img: "/img/LyanRoach.png"
  },
  {
    name: "Michelle Stewart",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "1 May, 8:01 PM",
    readed: true,
    img: "/img/MichelleStewart.png"
  },
  {
    name: "LyanRoach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: true,
    img: "/img/LyanRoach.png"
  },
  {
    name: "Lyan Roach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: true,
    img: "/img/LyanRoach.png"
  }
];


//Projects

const projects = [
  {
    id: 1,
    type: "New website",
    company: "Microsoft",
    price: 1300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "15 May 2018",
    timeLeft: "10 days left",
    timeSpent: "2 months",
    progress: 30,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 2,
    type: "New website",
    company: "Google",
    price: 3600,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "31 May 2018",
    timeLeft: "Completed",
    timeSpent: "620 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 3,
    type: "New logo",
    company: "Themeforest",
    price: 1200,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "13 April 2018",
    timeLeft: "Completed",
    timeSpent: "46 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 4,
    type: "New website",
    company: "Themeforest",
    price: 1000,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "14 April 2018",
    timeLeft: "Completed",
    timeSpent: "140 hours",
    progress: 0,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 5,
    type: "Landing page",
    company: "Google",
    price: 1500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "31 May 2018",
    timeLeft: "15 days left",
    timeSpent: "40 hours",
    progress: 10,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 6,
    type: "Landing page",
    company: "Microsoft",
    price: 900,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "10 April 2018",
    timeLeft: "1 year left",
    timeSpent: "70 hours",
    progress: 99,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 7,
    type: "Mobile app",
    company: "Microsoft",
    price: 2700,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "6 May 2018",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Development",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 8,
    type: "New dashboard",
    company: "Symu.co",
    price: 3200,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "22 April 2018",
    timeLeft: "15 days left",
    timeSpent: "35 hours",
    progress: 50,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 9,
    type: "New logo",
    company: "Microsoft",
    price: 3500,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "19 April 2018",
    timeLeft: "Completed",
    timeSpent: "12 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 10,
    type: "New dashboard",
    company: "Symu.co",
    price: 900,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "12 May 2018",
    timeLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 20,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 11,
    type: "New dashboard",
    company: "Symu.co",
    price: 3600,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "4 May 2018",
    timeLeft: "Completed",
    timeSpent: "548 hours",
    progress: 0,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 12,
    type: "Landing page",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 13,
    type: "New logo",
    company: "Themeforest",
    price: 1300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "30 June 2017",
    timeLeft: "3 month left",
    timeSpent: "26 hours",
    progress: 15,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 14,
    type: "New logo",
    company: "JCD.pl",
    price: 3500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "13 May 2018",
    timeLeft: "45 days left",
    timeSpent: "15 hours",
    progress: 20,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 15,
    type: "Landing page",
    company: "Google",
    price: 2100,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "22 June 2017",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 16,
    type: "New dashboard",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 17,
    type: "New dashboard",
    company: "JCD.pl",
    price: 3800,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "1 April 2018",
    timeLeft: "2 month left",
    timeSpent: "78 hours",
    progress: 7,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 18,
    type: "New website",
    company: "Google",
    price: 3500,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "13 May 2018",
    timeLeft: "45 days left",
    timeSpent: "15 hours",
    progress: 20,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 19,
    type: "Mobile app",
    company: "Facebook",
    price: 2400,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "13 June 2018",
    timeLeft: "20 days left",
    timeSpent: "48 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 20,
    type: "Landing page",
    company: "JCD.pl",
    price: 4300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "9 May 2018",
    timeLeft: "Completed",
    timeSpent: "1024 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 21,
    type: "Landing page",
    company: "Symu.co",
    price: 2400,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "13 June 2018",
    timeLeft: "20 days left",
    timeSpent: "48 hours",
    progress: 20,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 22,
    type: "Wordpress theme",
    company: "Google",
    price: 4500,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "1 April 2018",
    timeLeft: "1 month left",
    timeSpent: "78 hours",
    progress: 75,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 23,
    type: "Wordpress theme",
    company: "Microsoft",
    price: 2600,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "15 June 2018",
    timeLeft: "22 days left",
    timeSpent: "56 hours",
    progress: 8,
    status: "Planning",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 24,
    type: "Wordpress theme",
    company: "Microsoft",
    price: 900,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "12 May 2018",
    timeLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 20,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 25,
    type: "New dashboard",
    company: "Themeforest",
    price: 2800,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "3 May 2018",
    timeLeft: "Completed",
    timeSpent: "2048 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 26,
    type: "New dashboard",
    company: "Microsoft",
    price: 2600,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "15 June 2018",
    timeLeft: "22 days left",
    timeSpent: "56 hours",
    progress: 8,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 27,
    type: "New website",
    company: "Microsoft",
    price: 1900,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "1 May 2018",
    timeLeft: "1 month left",
    timeSpent: "1024 hours",
    progress: 19,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 28,
    type: "Mobile app",
    company: "JCD.pl",
    price: 1500,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "31 May 2018",
    timeLeft: "15 days left",
    timeSpent: "40 hours",
    progress: 30,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 29,
    type: "New dashboard",
    company: "Google",
    price: 3100,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "30 June 2018",
    timeLeft: "1 month left",
    timeSpent: "256 hours",
    progress: 25,
    status: "Planning",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 30,
    type: "Landing page",
    company: "Microsoft",
    price: 1900,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "1 May 2018",
    timeLeft: "Completed",
    timeSpent: "1024 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 31,
    type: "Wordpress theme",
    company: "JCD.pl",
    price: 3100,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "30 June 2018",
    timeLeft: "1 month left",
    timeSpent: "256 hours",
    progress: 45,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 32,
    type: "Landing page",
    company: "Themeforest",
    price: 2800,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "3 May 2018",
    timeLeft: "1 month left",
    timeSpent: "2048 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 33,
    type: "New logo",
    company: "Microsoft",
    price: 1300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "15 May 2018",
    timeLeft: "10 days left",
    timeSpent: "2 months",
    progress: 30,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 34,
    type: "Landing page",
    company: "Themeforest",
    price: 1300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "30 June 2017",
    timeLeft: "3 month left",
    timeSpent: "26 hours",
    progress: 15,
    status: "Planning",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 35,
    type: "New website",
    company: "Google",
    price: 4500,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "1 April 2018",
    timeLeft: "1 month left",
    timeSpent: "78 hours",
    progress: 75,
    status: "Quened",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 36,
    type: "New logo",
    company: "Microsoft",
    price: 3600,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "31 May 2018",
    timeLeft: "1 day left",
    timeSpent: "620 hours",
    progress: 10,
    status: "Planning",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 37,
    type: "New website",
    company: "JCD.pl",
    price: 4300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "9 May 2018",
    timeLeft: "5 month left",
    timeSpent: "1024 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 38,
    type: "Mobile app",
    company: "JCD.pl",
    price: 2100,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "22 June 2017",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Design",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 39,
    type: "Wordpress theme",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "9 May 2018",
    timeLeft: "5 month left",
    timeSpent: "1024 hours",
    progress: 30,
    status: "Development",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 40,
    type: "New logo",
    company: "JCD.pl",
    price: 3800,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "1 April 2018",
    timeLeft: "2 month left",
    timeSpent: "78 hours",
    progress: 7,
    status: "Quened",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 41,
    type: "Landing page",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 42,
    type: "New logo",
    company: "Microsoft",
    price: 2300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "22 June 2015",
    timeLeft: "2 days left",
    timeSpent: "158 hours",
    progress: 84,
    status: "Design",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 43,
    type: "New website",
    company: "JCD.pl",
    price: 2800,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "3 May 2018",
    timeLeft: "1 month left",
    timeSpent: "2048 hours",
    progress: 50,
    status: "Planning",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 44,
    type: "New dashboard",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 45,
    type: "Wordpress theme",
    company: "Themeforest",
    price: 1900,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "1 May 2018",
    timeLeft: "1 month left",
    timeSpent: "1024 hours",
    progress: 19,
    status: "Development",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 46,
    type: "Landing page",
    company: "Symu.co",
    price: 3600,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "4 May 2018",
    timeLeft: "1 day left",
    timeSpent: "548 hours",
    progress: 14,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 47,
    type: "Wordpress theme",
    company: "Facebook",
    price: 3200,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "22 April 2018",
    timeLeft: "15 days left",
    timeSpent: "35 hours",
    progress: 50,
    status: "Design",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 48,
    type: "Mobile app",
    company: "Microsoft",
    price: 3500,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "19 April 2018",
    timeLeft: "2 month left",
    timeSpent: "12 hours",
    progress: 20,
    status: "Testing",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 49,
    type: "New website",
    company: "Google",
    price: 4300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Planning",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 50,
    type: "New logo",
    company: "Microsoft",
    price: 2700,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "6 May 2018",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 86,
    status: "Testing",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 51,
    type: "Mobile app",
    company: "Symu.co",
    price: 900,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "10 April 2018",
    timeLeft: "1 year left",
    timeSpent: "70 hours",
    progress: 10,
    status: "Development",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 52,
    type: "Landing page",
    company: "Themeforest",
    price: 1000,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "14 April 2018",
    timeLeft: "3 month left",
    timeSpent: "140 hours",
    progress: 90,
    status: "Testing",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 53,
    type: "Mobile app",
    company: "Google",
    price: 3600,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "31 May 2018",
    timeLeft: "1 day left",
    timeSpent: "0 hours",
    progress: 0,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 54,
    type: "Landing page",
    company: "Themeforest",
    price: 1200,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "13 April 2018",
    timeLeft: "3 month left",
    timeSpent: "46 hours",
    progress: 45,
    status: "Development",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 55,
    type: "New website",
    company: "Microsoft",
    price: 1200,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "13 April 2018",
    timeLeft: "3 month left",
    timeSpent: "46 hours",
    progress: 45,
    status: "Testing",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 56,
    type: "Mobile app",
    company: "Microsoft",
    price: 4500,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "1 April 2018",
    timeLeft: "1 month left",
    timeSpent: "78 hours",
    progress: 75,
    status: "Development",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 57,
    type: "Mobile app",
    company: "Google",
    price: 1300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "15 May 2018",
    timeLeft: "10 days left",
    timeSpent: "2 months",
    progress: 30,
    status: "Design",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 58,
    type: "New dashboard",
    company: "Google",
    price: 1000,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "14 April 2018",
    timeLeft: "3 month left",
    timeSpent: "140 hours",
    progress: 90,
    status: "Development",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 59,
    type: "New logo",
    company: "Google",
    price: 900,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "10 April 2018",
    timeLeft: "1 year left",
    timeSpent: "70 hours",
    progress: 10,
    status: "Testing",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 60,
    type: "Landing page",
    company: "Symu.co",
    price: 3800,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "1 April 2018",
    timeLeft: "2 month left",
    timeSpent: "78 hours",
    progress: 7,
    status: "Development",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 61,
    type: "Wordpress theme",
    company: "Themeforest",
    price: 1500,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "31 May 2018",
    timeLeft: "15 days left",
    timeSpent: "40 hours",
    progress: 10,
    status: "Design",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 62,
    type: "Wordpress theme",
    company: "Microsoft",
    price: 3500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "19 April 2018",
    timeLeft: "2 month left",
    timeSpent: "12 hours",
    progress: 20,
    status: "Development",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 63,
    type: "Mobile app",
    company: "JCD.pl",
    price: 3200,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "22 April 2018",
    timeLeft: "15 days left",
    timeSpent: "35 hours",
    progress: 50,
    status: "Development",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 64,
    type: "New website",
    company: "Facebook",
    price: 3600,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "4 May 2018",
    timeLeft: "1 day left",
    timeSpent: "548 hours",
    progress: 14,
    status: "Development",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 65,
    type: "New website",
    company: "Google",
    price: 900,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "12 May 2018",
    timeLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 20,
    status: "Design",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 66,
    type: "New logo",
    company: "JCD.pl",
    price: 4300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Testing",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 67,
    type: "New dashboard",
    company: "Microsoft",
    price: 2300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "22 June 2015",
    timeLeft: "2 days left",
    timeSpent: "158 hours",
    progress: 84,
    status: "Development",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 68,
    type: "New dashboard",
    company: "Themeforest",
    price: 2700,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "6 May 2018",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 69,
    type: "Landing page",
    company: "Facebook",
    price: 3500,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "13 May 2018",
    timeLeft: "45 days left",
    timeSpent: "15 hours",
    progress: 20,
    status: "Design",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 70,
    type: "Mobile app",
    company: "Facebook",
    price: 3800,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "1 April 2018",
    timeLeft: "2 month left",
    timeSpent: "78 hours",
    progress: 77,
    status: "Testing",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 71,
    type: "New logo",
    company: "Symu.co",
    price: 2100,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "22 June 2017",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Development",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 72,
    type: "Wordpress theme",
    company: "JCD.pl",
    price: 1000,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "14 April 2018",
    timeLeft: "3 month left",
    timeSpent: "140 hours",
    progress: 80,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 73,
    type: "New dashboard",
    company: "JCD.pl",
    price: 2400,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "13 June 2018",
    timeLeft: "20 days left",
    timeSpent: "48 hours",
    progress: 52,
    status: "Development",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 74,
    type: "Landing page",
    company: "Symu.co",
    price: 4500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "1 April 2018",
    timeLeft: "1 month left",
    timeSpent: "78 hours",
    progress: 75,
    status: "Testing",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 75,
    type: "New website",
    company: "Microsoft",
    price: 1300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "30 June 2017",
    timeLeft: "3 month left",
    timeSpent: "26 hours",
    progress: 15,
    status: "Design",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 76,
    type: "New dashboard",
    company: "Facebook",
    price: 3500,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "19 April 2018",
    timeLeft: "Completed",
    timeSpent: "12 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 77,
    type: "New logo",
    company: "Google",
    price: 2600,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "15 June 2018",
    timeLeft: "22 days left",
    timeSpent: "56 hours",
    progress: 8,
    status: "Development",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 78,
    type: "New dashboard",
    company: "Themeforest",
    price: 1900,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "1 May 2018",
    timeLeft: "Completed",
    timeSpent: "1024 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 79,
    type: "Landing page",
    company: "Themeforest",
    price: 3100,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "30 June 2018",
    timeLeft: "1 month left",
    timeSpent: "256 hours",
    progress: 45,
    status: "Design",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 80,
    type: "New website",
    company: "Google",
    price: 4300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Planning",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 81,
    type: "New website",
    company: "Themeforest",
    price: 3100,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "30 June 2018",
    timeLeft: "1 month left",
    timeSpent: "256 hours",
    progress: 45,
    status: "Development",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 82,
    type: "New logo",
    company: "Google",
    price: 2800,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "3 May 2018",
    timeLeft: "Completed",
    timeSpent: "2048 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 83,
    type: "Mobile app",
    company: "Facebook",
    price: 2600,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "15 June 2018",
    timeLeft: "22 days left",
    timeSpent: "56 hours",
    progress: 8,
    status: "Design",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 84,
    type: "New website",
    company: "Microsoft",
    price: 2300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "22 June 2015",
    timeLeft: "2 days left",
    timeSpent: "158 hours",
    progress: 84,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 85,
    type: "Mobile app",
    company: "Microsoft",
    price: 1300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "30 June 2017",
    timeLeft: "3 month left",
    timeSpent: "26 hours",
    progress: 15,
    status: "Development",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 86,
    type: "Wordpress theme",
    company: "Facebook",
    price: 4400,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "5 May 2018",
    timeLeft: "Completed",
    timeSpent: "2048 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 87,
    type: "New logo",
    company: "JCD.pl",
    price: 2400,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "13 June 2018",
    timeLeft: "20 days left",
    timeSpent: "48 hours",
    progress: 20,
    status: "Design",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 88,
    type: "New dashboard",
    company: "Symu.co",
    price: 2100,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "22 June 2017",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Testing",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 89,
    type: "New dashboard",
    company: "Facebook",
    price: 4300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "9 May 2018",
    timeLeft: "Completed",
    timeSpent: "1024 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 90,
    type: "New dashboard",
    company: "Symu.co",
    price: 3500,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "13 May 2018",
    timeLeft: "45 days left",
    timeSpent: "15 hours",
    progress: 20,
    status: "Planning",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 91,
    type: "Landing page",
    company: "Google",
    price: 2300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "22 June 2015",
    timeLeft: "2 days left",
    timeSpent: "158 hours",
    progress: 84,
    status: "Testing",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 92,
    type: "Mobile app",
    company: "Symu.co",
    price: 3300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "9 May 2018",
    timeLeft: "Completed",
    timeSpent: "526 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 93,
    type: "Landing page",
    company: "Google",
    price: 900,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "12 May 2018",
    timeLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 20,
    status: "Planning",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 94,
    type: "New logo",
    company: "JCD.pl",
    price: 3200,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "22 April 2018",
    timeLeft: "15 days left",
    timeSpent: "35 hours",
    progress: 50,
    status: "Testing",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 95,
    type: "New logo",
    company: "JCD.pl",
    price: 3600,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "4 May 2018",
    timeLeft: "Completed",
    timeSpent: "548 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 96,
    type: "New website",
    company: "Themeforest",
    price: 1500,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "31 May 2018",
    timeLeft: "15 days left",
    timeSpent: "40 hours",
    progress: 10,
    status: "Planning",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 97,
    type: "New dashboard",
    company: "Google",
    price: 900,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "10 April 2018",
    timeLeft: "Completed",
    timeSpent: "70 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 98,
    type: "Landing page",
    company: "Symu.co",
    price: 3600,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "31 May 2018",
    timeLeft: "Completed",
    timeSpent: "620 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 99,
    type: "New website",
    company: "Symu.co",
    price: 1300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "15 May 2018",
    timeLeft: "10 days left",
    timeSpent: "2 months",
    progress: 30,
    status: "Planning",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 100,
    type: "Mobile app",
    company: "Facebook",
    price: 1200,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "13 April 2018",
    timeLeft: "Completed",
    timeSpent: "46 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  }
];


//Raport Chart
const raport = [5, 10, 8, 11, 7, 13, 6, 8, 12, 6, 4, 5, 14, 12, 9, 1, 12, 12, 9, 2, 4, 1, 6, 14, 13, 6, 10, 13, 14, 4, 11, 12, 5, 2, 12, 6, 11, 4, 5, 3, 6, 7, 9, 14, 11, 10, 7, 9, 6, 8, 4, 3, 14, 5, 11, 2, 8, 1, 9, 1, 12, 9, 8, 8, 11, 7, 14, 7, 8, 11, 5, 6, 6, 4, 10, 5, 13, 4, 3, 5, 12, 12, 1, 5, 11, 4, 1, 2, 2, 5, 12, 3, 9, 1, 1, 6, 1, 13, 13, 7, 11, 10, 13, 5, 5, 13, 9, 7, 14, 6, 4, 8, 5, 11, 12, 13, 6, 3, 4, 1, 11, 5, 11, 4, 13, 6, 11, 2, 1, 13, 5, 8, 6, 5, 13, 9, 6, 2, 11, 4, 13, 3, 7, 9, 5, 14, 12, 3, 4, 6, 13, 10, 2, 12, 7, 4, 2, 2, 10, 4, 8, 3, 10, 6, 9, 12, 8, 2, 8, 9, 8, 5, 6, 3, 13, 12, 5, 14, 2, 12, 4, 11, 3, 9, 5, 8, 9, 11, 2, 13, 9, 4, 10, 1, 8, 3, 13, 1, 11, 14, 4, 13, 3, 9, 11, 1, 11, 14, 2, 12, 6, 12, 11, 1, 4, 6, 14, 7, 5, 4, 10, 14, 12, 11, 5, 14, 13, 9, 2, 3, 8, 2, 12, 13, 6, 2, 8, 9, 5, 8, 10, 4, 10, 6, 13, 7, 1, 6, 9, 14, 5, 7, 9, 11, 14, 10, 9, 5, 2, 12, 9, 8, 8, 11, 8, 12, 4, 1, 2, 1, 4, 1, 13, 9, 12, 2, 13, 12, 1, 3, 5, 7, 13, 7, 2, 8, 1, 14, 14, 14, 11, 11, 12, 11, 12, 8, 2, 1, 10, 2, 9, 14, 10, 11, 7, 3, 14, 5, 9, 5, 14, 14, 7, 12, 1, 11, 11, 8, 1, 13, 2, 1, 10, 3, 8, 4, 11, 1, 2, 11, 12, 3, 5, 3, 11, 3, 5, 4, 2, 7, 5, 11, 2, 14, 7, 4, 10, 9, 14, 1, 10, 9, 14, 14, 2, 7, 7, 11, 9, 4, 7, 11, 2, 7, 7, 12, 7, 8, 2, 9, 6, 4, 3, 12, 11, 11, 11, 12, 5, 3, 10, 4, 5, 7, 11, 9, 13, 9, 11, 7, 4, 9, 5, 11, 12, 7, 12, 5, 12, 10, 1, 8, 8, 10, 5, 3, 8, 4, 10, 10];


//Raport Table

const table = [
  {
    Campaing: 'Lorem ipsum dolor sit amet tetur',
    Time: '6 days',
    Views: 358000,
    Visitors: 58200,
    CTR: 25,
    CPC: 3.02,
    CPV: 2.51,
    CPM: 28.35,
    Status: 'Active'
  },
  {
    Campaing: 'Sed do eiusmod tempor',
    Time: '7 hours',
    Views: 1200,
    Visitors: 800,
    CTR: 10,
    CPC: 8.45,
    CPV: 6.13,
    CPM: 45.22,
    Status: 'Disable'
  }, {
    Campaing: 'Consectetur adipisicing elit sed',
    Time: '3 days',
    Views: 69000,
    Visitors: 7300,
    CTR: 19,
    CPC: 6.22,
    CPV: 3.90,
    CPM: 37.80,
    Status: 'Active'
  }
];

//PieChart

const pieChartYear = [
  views = {
    data: [90, 10],
    num: 49500,
    percent: '90'
  },
  visitors = {
    data: [59, 31],
    num: 9000,
    percent: '59'
  },
  impressions = {
    data: [88, 12],
    num: 66500,
    percent: '88'
  }
];

const pieChartMonth = [
  views = {
    data: [66, 44],
    num: 5800,
    percent: '66'
  },
  visitors = {
    data: [55, 45],
    num: 2600,
    percent: '55'
  },
  impressions = {
    data: [32, 68],
    num: 7200,
    percent: '32'
  }
];

const pieChartWeek = [
  views = {
    data: [73, 27],
    num: 1300,
    percent: '73'
  },
  visitors = {
    data: [31, 69],
    num: 800,
    percent: '31'
  },
  impressions = {
    data: [62, 38],
    num: 3800,
    percent: '62'
  }
];

//Chat
const messagesInbox = [
  {
    id: 0,
    name: "Michelle Stewart",
    readed: false,
    img: "/img/MichelleStewart.png",
    sendlerInfo: {
      online: false,
      position: 'Account',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart @gmail.com',
      phone: '+48 500 400 300',
      address: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
      },
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: false,
        date: "Yesterday, 12:30 PM",
        text: "Lorem ipsum dolor sit amet?"
      },
      {
        answer: true,
        date: "Yesterday, 15:09 PM",
        text: "Lorem ipsum dolor sit amet.!"
      },
      {
        answer: false,
        date: "Today, 5:31 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  },
  {
    id: 1,
    name: "Jolene Slater",
    readed: false,
    img: "/img/JoleneSlater.png",
    sendlerInfo: {
      online: true,
      position: 'Back End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'joleneslater @gmail.com',
      phone: '+48 400 500 600',
      address: '78 Enim St, London, UK',
      organization: 'Google',
      img: "/img/JoleneSlater.png",
      name: "Jolene Slater",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        answer: true,
        date: "14 April",
        text: "Ut enim ad minim veniam."
      },
      {
        answer: false,
        date: "14 April",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?"
      },
      {
        answer: true,
        date: "14 April",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      },
      {
        answer: false,
        date: "Yesterday, 11:45 AM",
        text: "Ut enim ad."
      },
      {
        answer: false,
        date: "Today, 5:31 PM",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
    ]
  },
  {
    id: 2,
    name: "LyanRoach",
    readed: true,
    img: "/img/LyanRoach.png",
    sendlerInfo: {
      online: false,
      position: 'UX/UI Designer',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'lyanroach @gmail.com',
      phone: '+48 600 500 400',
      address: '89 Duis St, Kyiv, UA',
      organization: 'Microsoft',
      img: "/img/LyanRoach.png",
      name: "Lyan Roach",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure/"
      },
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in!"
      },
      {
        answer: false,
        date: "Yesterday, 5:16 PM",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
    ]
  },
  {
    id: 3,
    name: "Dominic Lynton",
    readed: true,
    img: "/img/DominicLynton.png",
    sendlerInfo: {
      online: true,
      position: 'Front End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'dominiclynton @gmail.com',
      phone: '+46 500 800 100',
      address: '12 Excepteur St, Paris, FR',
      organization: 'Themeforest',
      img: "/img/DominicLynton.png",
      name: "Dominic Lynton",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa."
      },
      {
        answer: false,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non provident."
      }
    ]
  },
  {
    id: 4,
    name: "Michele Stewart",
    readed: true,
    img: "/img/MichelleStewart.png",
    sendlerInfo: {
      online: false,
      position: 'Account',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart @gmail.com',
      phone: '+48 500 400 300',
      address: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum?"
      },
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt!"
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet."
      },
      {
        answer: true,
        date: "Yesterday, 5:31 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  },
];
const messagesSent = [
  {
    id: 0,
    name: "Michelle Stewart",
    readed: true,
    img: "/img/MichelleStewart.png",
    sendlerInfo: {
      online: false,
      position: 'Account',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart @gmail.com',
      phone: '+48 500 400 300',
      adress: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor."
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
      },
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet"
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?"
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!"
      },
    ]
  },
  {
    id: 1,
    name: "Jolene Slater",
    readed: true,
    img: "/img/JoleneSlater.png",
    sendlerInfo: {
      online: true,
      position: 'Back End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'joleneslater @gmail.com',
      phone: '+48 400 500 600',
      address: '78 Enim St, London, UK',
      organization: 'Google',
      img: "/img/JoleneSlater.png",
      name: "Jolene Slater",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        answer: true,
        date: "14 April",
        text: "Ut enim ad minim veniam."
      },
      {
        answer: false,
        date: "14 April",
        text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?"
      },
      {
        answer: true,
        date: "Today, 5:34 PM",
        text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      },
    ]
  },
  {
    id: 2,
    name: "LyanRoach",
    readed: true,
    img: "/img/LyanRoach.png",
    sendlerInfo: {
      online: false,
      position: 'UX/UI Designer',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'lyanroach @gmail.com',
      phone: '+48 600 500 400',
      address: '89 Duis St, Kyiv, UA',
      organization: 'Microsoft',
      img: "/img/LyanRoach.png",
      name: "Lyan Roach",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure/"
      },
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in!"
      },
    ]
  },
  {
    id: 3,
    name: "Dominic Lynton",
    readed: true,
    img: "/img/DominicLynton.png",
    sendlerInfo: {
      online: true,
      position: 'Front End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'dominiclynton @gmail.com',
      phone: '+46 500 800 100',
      address: '12 Excepteur St, Paris, FR',
      organization: 'Themeforest',
      img: "/img/DominicLynton.png",
      name: "Dominic Lynton",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa."
      },
      {
        answer: false,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Excepteur sint occaecat cupidatat non provident."
      }
    ]
  },

];
const messagesTrash = [
  {
    id: 0,
    name: "Michelle Stewart",
    readed: false,
    img: "/img/MichelleStewart.png",
    sendlerInfo: {
      online: false,
      position: 'Account',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart @gmail.com',
      phone: '+48 500 400 300',
      address: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: false,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: true,
        date: "14 April",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        answer: true,
        date: "Yesterday, 5:31 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  },
  {
    id: 1,
    name: "Jolene Slater",
    readed: false,
    img: "/img/JoleneSlater.png",
    sendlerInfo: {
      online: true,
      position: 'Back End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'joleneslater @gmail.com',
      phone: '+48 400 500 600',
      address: '78 Enim St, London, UK',
      organization: 'Google',
      img: "/img/JoleneSlater.png",
      name: "Jolene Slater",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        answer: true,
        date: "14 April",
        text: "Ut enim ad minim veniam."
      },
      {
        answer: false,
        date: "14 April",
        text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?"
      },
      {
        answer: true,
        date: "14 April",
        text: " Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: " Ut enim ad."
      },
    ]
  },
  {
    id: 2,
    name: "LyanRoach",
    readed: true,
    img: "/img/LyanRoach.png",
    sendlerInfo: {
      online: false,
      position: 'UX/UI Designer',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'lyanroach @gmail.com',
      phone: '+48 600 500 400',
      address: '89 Duis St, Kyiv, UA',
      organization: 'Microsoft',
      img: "/img/LyanRoach.png",
      name: "Lyan Roach",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure/"
      },
      {
        answer: false,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in reprehenderit in voluptate."
      },
      {
        answer: true,
        date: "14 April",
        text: "Duis aute irure dolor in!"
      },
    ]
  },

];

const userList = [
  {
    id: 0,
    online: false,
    position: 'Account',
    email: 'michellestewart@gmail.com',
    phone: '+48 500 400 300',
    address: '65 Lorem St, Warsaw, PL',
    organization: 'Symu.co',
    img: "/img/MichelleStewart.png",
    name: "Michelle Stewart"
  },
  {
    id: 1,
    online: true,
    position: 'Front End Dev',
    email: 'dominiclynton@gmail.com',
    phone: '+46 500 800 100',
    address: '12 Excepteur St, Paris, FR',
    organization: 'Themeforest',
    img: "/img/DominicLynton.png",
    name: "Dominic Lynton",
  },
  {
    id: 2,
    online: false,
    position: 'UX/UI Designer',
    email: 'lyanroach@gmail.com',
    phone: '+48 600 500 400',
    address: '89 Duis St, Kyiv, UA',
    organization: 'Microsoft',
    img: "/img/LyanRoach.png",
    name: "Lyan Roach",
  },
  {
    id: 3,
    online: true,
    position: 'Back End Dev',
    email: 'joleneslater@gmail.com',
    phone: '+48 400 500 600',
    address: '78 Enim St, London, UK',
    organization: 'Google',
    img: "/img/JoleneSlater.png",
    name: "Jolene Slater",
  },
];


//login
const userExist = {
  name: "admin",
  pass: "123"
};

App.use(bodyParser.json());

App.post("/api/user", (req, res) => {
  const name = req.body.login;
  const pass = req.body.pass;

  if (userExist.name === name && userExist.pass === pass) {
    return res.json({
      userCheck: "user exist"
    })
  } else {
    return res.json({
      userCheck: "user does not exist"
    })
  }
});

//Sales Report
App.get("/api/user/report/year", (req, res) => {
  return res.json(report.year)
});

App.get("/api/user/report/month", (req, res) => {
  return res.json(report.month)
});

App.get("/api/user/report/week", (req, res) => {
  return res.json(report.week)
});

//Inbox Messages
App.get("/api/user/messages/inbox", (req, res) => {
  return res.json(inbox)
});

//Projects
App.get("/api/user/projects", (req, res) => {
  return res.json(projects)
});

//Raport
App.get("/api/user/raport", (req, res) => {
  return res.json(raport)
});

//Raport Table
App.get("/api/user/raport/table", (req, res) => {
  return res.json(table)
});

//PieChart
App.get('/api/user/raport/pie/year', (req, res) => {
  return res.json(pieChartYear)
});

App.get('/api/user/raport/pie/month', (req, res) => {
  return res.json(pieChartMonth)
});

App.get('/api/user/raport/pie/week', (req, res) => {
  return res.json(pieChartWeek)
});

//Chat Inbox

//Inbox Messages
App.get("/api/user/chat/inbox", (req, res) => {
  return res.json(messagesInbox)
});
//Sent Messages
App.get("/api/user/chat/sent", (req, res) => {
  return res.json(messagesSent)
});
//Trash Messages
App.get("/api/user/chat/trash", (req, res) => {
  return res.json(messagesTrash)
});

//AllUsers
App.get("/api/user/userList", (req, res) => {
  return res.json(userList)
});

App.listen(4000, () => {
  console.log("yoohoo! server is started")
});