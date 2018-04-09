import React from 'react';
// import './Workflow.css'

//components
import Select from "../../atoms/Select/Select";
import ChatWrap from "../../organisms/ChatWrap/ChatInboxWrap";
import ChatSentWrap from "../../organisms/ChatWrap/ChatSentWrap";
import ChatTrashWrap from "../../organisms/ChatWrap/ChatTrashWrap";


class Chats extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      tab: 'chatInbox',
      messagesInbox: [],
      messagesSent: [],
      messagesTrash: [],
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

      });
    fetch('/api/user/chat/sent', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          messagesSent: res,
          isLoading: false
        });

      });
    fetch('/api/user/chat/trash', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          messagesTrash: res,
          isLoading: false
        });

      })
  }

  onSelectChange = (ev)=> {
    console.log(ev.target.value)
    let filterMessage = this.state.messagesInbox.filter((e)=>{
      return e.chat[e.chat.length - 1].date === "Today, 5:31 PM"
    });

    this.setState({
      messagesInbox: filterMessage
    })

    console.log(filterMessage, this.state.messagesInbox)

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
      list: ["Today", "Yesterday", "Last Month"],
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