import React from 'react';
import './ChatUserInfo.css'

class ChatUserInfo extends React.Component {


  render() {

    const {img, name, online, position, about, email, phone, address, organization} = this.props.data;

    return (
      <div className={img && 'ChatUserInfo'}>
        <img src={img} alt={name}/>
        <p className="chat-info-name">{name}</p>
        <p className="chat-info-position">{position}</p>
        <p className="chat-info-about">{about}</p>
        {img && <span>Email</span>}
        <p>{email}</p>
        {img && <span>Phone</span>}
        <p>{phone}</p>
        {img && <span>Address</span>}
        <p>{address}</p>
        {img && <span>Organization</span>}
        <p>{organization}</p>




      </div>
    )
  }
}

export default ChatUserInfo;