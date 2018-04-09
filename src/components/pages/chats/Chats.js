import React from 'react';
// import './Workflow.css'

//components
// import DNDWrap from "../../organisms/DND/DNDWrap";
// import AllProjects from "../../organisms/AllProjects/AllProjects";
import Select from "../../atoms/Select/Select";
import ChatWrap from "../../organisms/ChatWrap/ChatInboxWrap";
import ChatSentWrap from "../../organisms/ChatWrap/ChatSentWrap";
import ChatTrashWrap from "../../organisms/ChatWrap/ChatTrashWrap";



const messagesSent = [
  {
    id: 0,
    name: "Mi",
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
        text: "99"
      },
      {
        answer: true,
        date: "14 April",
        text: "888"
      },
      {
        answer: false,
        date: "14 April",
        text: "7"
      },
      {
        answer: true,
        date: "14 April",
        text: "66"
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: "Tst"
      },
    ]
  },
];

const messagesTrash = [
  {
    id: 0,
    name: "i",
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
        text: "99"
      },
      {
        answer: true,
        date: "14 April",
        text: "888"
      },
      {
        answer: false,
        date: "14 April",
        text: "7"
      },
      {
        answer: true,
        date: "14 April",
        text: "66"
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: "Tst"
      },
    ]
  },
];

class Chats extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      tab: 'chatInbox',
      messagesInbox: [],
      messagesSent: messagesSent,
      messagesTrash: messagesTrash,
      isLoading: false
    }
  }

  componentWillMount() {
    this.setState({isLoading:true});
    fetch('/api/user/chat/inbox', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          messagesInbox: res,
          isLoading: false
        });

      })
  }


  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };


  showSelectedWrap() {
    let activeTab = this.state.tab;
    if (activeTab === 'chatInbox' && this.state.isLoading === false) {
      return (
        <ChatWrap data={this.state.messagesInbox}/>
      )
    }
    if (activeTab  === 'chatSent') {
      return (
        <ChatSentWrap data={this.state.messagesSent}/>
      )
    }
    if (activeTab === 'chatTrash') {
      return (
        <ChatTrashWrap  data={this.state.messagesTrash}/>
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