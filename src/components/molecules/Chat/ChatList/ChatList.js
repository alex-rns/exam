import React from 'react';
import './ChatList.css'
import FontAwesome from 'react-fontawesome';

class ChatList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeChat: [...this.props.data]
    }
  }

  listClick = (e) => {
    this.props.onClickMessage(e);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeChat: nextProps.data
    });
  }

  addNewCoversation = () => {
    console.log('qweqwe');
    console.log(this.state.activeChat);
    let myText = 'qwe';
    let myMess = {};
    let date = 'asdasd';
    myMess.answer = true;
    myMess.date = date;
    myMess.text = myText;

    console.log(myMess)

  };


  render() {

    return (
      <div className="ChatList">
        {this.state.activeChat.map((item, index) => {
          return (
            <a
              onClick={() => this.listClick(item)}
              className='chatlist-item'
              key={index}
            >

              <div className="chatlist-message-wrap">

                <div
                  className={"chatlist-message-header "
                  +
                  (item.readed || "chatlist-message-header-noread")}
                >

                  <div className="chatlist-message-sendler">
                    <img src={item.img} alt={item.name}/>
                    <p>{item.name}</p>
                  </div>

                  <span>{item.chat[item.chat.length - 1].date}</span>
                </div>
                <p className="chatlist-message-text">
                  {item.chat[item.chat.length - 1].text}
                </p>
              </div>
            </a>
          )
        })}

        <button onClick={this.addNewCoversation} className="new-coversation">
          <FontAwesome
            name='plus'
          />
          New coversation
        </button>
      </div>
    )
  }
}

export default ChatList;