import React from 'react';
// import './ChatList.css'

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
      messagesTrashView: [],
      messagesInboxView: [],
      messagesSentView: [],
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
          messagesInboxView: res,
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
          messagesSentView: res,
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
          messagesTrashView: res,
          messagesTrash: res,
          isLoading: false
        });

      })
  }


  onSelectChange = (selectFilter)=> {

    if(selectFilter.target.value === 'All'){
      fetch('/api/user/chat/inbox', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            messagesInboxView: res
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
            messagesSentView: res
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
            messagesTrashView: res
          });

        })
    }

    if(selectFilter.target.value === 'Today'){
      let filterInputMessage = this.state.messagesInbox.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesInboxView: filterInputMessage
      });
      let filterSentMessage = this.state.messagesSent.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesSentView: filterSentMessage
      });
      let filterTrashMessage = this.state.messagesTrash.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Today,"
      });
      this.setState({
        messagesTrashView: filterTrashMessage
      })
    }
    if(selectFilter.target.value === 'Yesterday'){
      let filterInputMessage = this.state.messagesInbox.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesInboxView: filterInputMessage
      });
      let filterSentMessage = this.state.messagesSent.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesSentView: filterSentMessage
      });
      let filterTrashMessage = this.state.messagesTrash.filter((e)=>{
        return e.chat[e.chat.length - 1].date.replace(/ [\s\S]+/, '') === "Yesterday,"
      });
      this.setState({
        messagesTrashView: filterTrashMessage
      })
    }

  };


  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };


  showSelectedWrap() {
    let activeTab = this.state.tab;
    if (activeTab === 'chatInbox' && this.state.isLoading === false) {
      return (
        <ChatWrap data={this.state.messagesInboxView.slice(0, 4)}/>
      )
    }
    if (activeTab  === 'chatSent') {
      return (
        <ChatSentWrap data={this.state.messagesSentView.slice(0, 4)}/>
      )
    }
    if (activeTab === 'chatTrash') {
      return (
        <ChatTrashWrap  data={this.state.messagesTrashView.slice(0, 4)}/>
      )
    }
  }

  render() {

    const chatMessages = {
      list: ["All", "Today", "Yesterday"],
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