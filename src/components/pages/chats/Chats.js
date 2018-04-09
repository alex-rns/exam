import React from 'react';
// import './Workflow.css'

//components
// import DNDWrap from "../../organisms/DND/DNDWrap";
// import AllProjects from "../../organisms/AllProjects/AllProjects";
import Select from "../../atoms/Select/Select";
import ChatWrap from "../../organisms/ChatWrap/ChatWrap";


const messagesInbox = [
  {
    id: 0,
    name: "Michelle Stewart",
    readed: false,
    img: "/img/MichelleStewart.png",
    sendlerInfo: {
      online: false,
      position: 'Back End Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart@gmail.com',
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
        text: "999999999"
      },
      {
        answer: true,
        date: "14 April",
        text: "8888888"
      },
      {
        answer: false,
        date: "14 April",
        text: "77777"
      },
      {
        answer: true,
        date: "14 April",
        text: "66666"
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: "Todaylast"
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
      position: 'Full Stack Dev',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart@gmail.com',
      phone: '+48 500 400 300',
      adress: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/JoleneSlater.png",
      name: "Jolene Slater",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "999999999"
      },
      {
        answer: true,
        date: "14 April",
        text: "8888888"
      },
      {
        answer: false,
        date: "14 April",
        text: "77777"
      },
      {
        answer: true,
        date: "14 April",
        text: "66666"
      },
      {
        answer: true,
        date: "14 April",
        text: "last"
      },
    ]
  },
  {
    id: 2,
    name: "Lyall Roach",
    readed: true,
    img: "/img/LyanRoach.png",
    sendlerInfo: {
      online: false,
      position: 'UX/UI Designer',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart@gmail.com',
      phone: '+48 500 400 300',
      adress: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/LyanRoach.png",
      name: "Lyall Roach",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "999999999"
      },
      {
        answer: true,
        date: "14 April",
        text: "8888888"
      },
      {
        answer: false,
        date: "14 April",
        text: "77777"
      },
      {
        answer: true,
        date: "14 April",
        text: "66666"
      },
      {
        answer: true,
        date: "14 April",
        text: "last"
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
      position: 'Dominic Lynton',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      email: 'michellestewart@gmail.com',
      phone: '+48 500 400 300',
      adress: '65 Lorem St, Warsaw, PL',
      organization: 'Symu.co',
      img: "/img/DominicLynton.png",
      name: "Dominic Lynton",
    },
    chat: [
      {
        answer: false,
        date: "14 April",
        text: "999999999"
      },
      {
        answer: true,
        date: "14 April",
        text: "8888888"
      },
      {
        answer: false,
        date: "14 April",
        text: "77777"
      },
      {
        answer: true,
        date: "14 April",
        text: "66666"
      },
      {
        answer: true,
        date: "14 April",
        text: "last"
      },
    ]
  },
];


class Chats extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      tab: 'chatInbox',
      messagesInbox: messagesInbox

    }
  }

  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };


  showSelectedWrap() {
    let activeTab = this.state.tab;
    if (activeTab === 'chatInbox') {
      return (
        <ChatWrap data={this.state.messagesInbox}/>
      )
    }
    if (activeTab === 'chatSent') {
      return (
        <ChatWrap/>
      )
    }
    if (activeTab === 'chatTrash') {
      return (
        <ChatWrap/>
      )
    }
  }


  render() {


    const chatMessages = {
      list: ["Tooday", "Yestarday", "Last Month"],
      label: 'Filter messages'
    };

    return (


      <div className="Chats">
        <div className="chat-header">
          <div className="chat-tab">

            <a
              className={this.state.tab === 'chatInbox'
                ? 'chatTab-active'
                : 'chatTab'}
              onClick={() => this.tabChange('chatInbox')}
            >Inbox </a>

            <a
              className={this.state.tab === 'chatSent'
                ? 'chatTab-active'
                : 'chatTab'}
              onClick={() => this.tabChange('chatSent')}
            >Sent</a>

            <a
              className={this.state.tab === 'chatTrash'
                ? 'chatTab-active'
                : 'chatTab'}
              onClick={() => this.tabChange('chatTrash')}
            >Trash</a>

          </div>
          <Select onChange={this.onSelectChange} data={chatMessages}/>
        </div>

        <div className="chat-wrap">
          {this.showSelectedWrap()}
        </div>

      </div>
    )
  }
}

export default Chats;