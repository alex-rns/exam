import React from 'react';

class ChatUserInfo extends React.Component {


  render() {

    const {img, name, online, position, about, email, phone, adress, organization} = this.props.data;

    return (
      <div>
        <img src={img} alt={name}/>
        <p>{position}</p>




      </div>
    )
  }
}

export default ChatUserInfo;