import React from 'react';
import {Col} from 'react-bootstrap/lib';
import InboxHomeMessage from "../../molecules/InboxHomeMessage/InboxHomeMessage";


class Inbox extends React.Component {

  constructor(){
    super();
    this.state={
      dataInbox:[]
    }
  }

  componentWillMount(){
    fetch('/api/user/messages/inbox', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataInbox: res
        });
      })
  }


  render(){
    return(
      <Col className="Inbox" md={3}>
        <div className="inbox-header">
          <p>Inbox</p>
          <InboxHomeMessage data={this.state.dataInbox}/>
        </div>

      </Col>
    )
  }
}

export default Inbox;