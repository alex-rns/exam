import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap/lib';
import ChatList from "../../molecules/Chat/ChatList/ChatList";
import ChatMessage from "../../molecules/Chat/ChatMessage/ChatMessage";

//components

class ChatWrap extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeChat : []
    }
  }

  mesClick =(e) =>{
    this.setState({
      activeChat: e.chat
    })
  }



  render(){

    console.log(this.state.activeChat)

    return(
      <div className="ChatWrap">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <ChatList onClickMessage={this.mesClick} data={this.props.data}/>
            </Col>
            <Col md={7}>
              <ChatMessage data={this.state.activeChat}/>
            </Col>
            <Col md={2}>3</Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default ChatWrap;