import React from 'react';
import {Col} from 'react-bootstrap/lib';
import InboxHomeMessage from "../../molecules/InboxHomeMessage/InboxHomeMessage";
import './Inbox.css'

class Inbox extends React.Component {

    constructor() {
        super();
        this.state = {
            dataInbox: [],
            dataNoReaded: []
        }
    }

    componentWillMount() {
        fetch('/api/user/messages/inbox', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataInbox: res,
                    dataNoReaded : res.filter((el)=>{
                        if(!el.readed){
                            return el
                        }
                })
                });

            })
    }


    render() {
        return (
            <Col className="Inbox" md={3}>
                <div className="inbox-header">
                    <p>Inbox
                    <span>({this.state.dataNoReaded.length})</span>
                    </p>
                </div>
                <InboxHomeMessage data={this.state.dataInbox}/>


            </Col>
        )
    }
}

export default Inbox;