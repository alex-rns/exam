import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap/lib';
import ChatList from "../../molecules/Chat/ChatList/ChatList";
import ChatMessage from "../../molecules/Chat/ChatMessage/ChatMessage";
import ChatUserInfo from "../../molecules/Chat/ChatUserInfo/ChatUserInfo";

//components

class ChatTrashWrap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeChat: [],
      myMessage: {},
      chatId : 0,
      allData: [],
      userInfo: []
    }
  }

  componentWillMount(){
    this.setState({
      allData: this.props.data
    })
  }

  mesClick = (e) => {
    this.setState({
      activeChat: e.chat,
      chatId: e.id,
      userInfo: e.sendlerInfo
    });
  };

  onAddMessage = (e) => {
    this.setState({
      myMessage: e,
      activeChat: [...this.state.activeChat, e]
    });
    console.log('onAddMessage', this.state.allData[this.state.chatId].chat.push(e))

  };

  render() {
    return (
      <div className="ChatWrap">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <ChatList newData={this.state.myMessage} onClickMessage={this.mesClick} data={this.state.allData}/>
            </Col>
            <Col md={7}>
              <ChatMessage onAddMessage={this.onAddMessage} data={this.state.activeChat}/>
            </Col>
            <Col md={2}>
              <ChatUserInfo data={this.state.userInfo}/>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default ChatTrashWrap;