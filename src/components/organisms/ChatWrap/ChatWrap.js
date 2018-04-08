import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap/lib';
import ChatList from "../../molecules/Chat/ChatList/ChatList";

//components

class ChatWrap extends React.Component {

  mesClick =(e) =>{
    console.log(e)
  }

  render(){
    return(
      <div className="ChatWrap">
        <Grid fluid>
          <Row>
            <Col md={3}>
              <ChatList onClickMessage={this.mesClick} data={this.props.data}/>
            </Col>
            <Col md={7}>2</Col>
            <Col md={2}>3</Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default ChatWrap;