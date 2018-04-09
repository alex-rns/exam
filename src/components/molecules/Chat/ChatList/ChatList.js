import React from 'react';

class ChatList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeChat: [...this.props.data]
    }
  }

  listClick = (e) =>{
    this.props.onClickMessage(e);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeChat: nextProps.data
    });
  }


  render(){

    return(
      <div>
        {this.state.activeChat.map((item, index)=>{
          return(
            <a onClick={() => this.listClick(item)} className="InboxHomeMessage" key={index}>
              <img src={item.img} alt={item.name}/>
              <div className="inbox-message-wrap">
                <div className={"inbox-message-header " + (item.readed || "inbox-message-header-noread")}>
                  <p>{item.name}</p>
                  <span>{item.chat[item.chat.length - 1].date}</span>
                </div>
                <p className="inbox-message-text">{item.chat[item.chat.length - 1].text}</p>
              </div>
            </a>
          )
        })}
      </div>
    )
  }
}

export default ChatList;