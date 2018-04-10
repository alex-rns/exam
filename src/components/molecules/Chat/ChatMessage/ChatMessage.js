import React from 'react';
import './ChatMessage.css'
import FontAwesome from 'react-fontawesome';


import myAvatar from '../../../../assets/img/ava.png'

class ChatMessage extends React.Component {



  componentDidUpdate() {
    //autoScroll to bottom
    const objDiv = document.getElementById('qwe');
    objDiv.scrollTop = objDiv.scrollHeight;
  }


  addMessage = (e) => {
    e.preventDefault();
    let myText = this.refs.input.value;
    let myMess = {};
    let date = new Date();
    let now = (date.toLocaleString(undefined, {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }) + ' , ' + date.toLocaleString(undefined, {
      hour: '2-digit',
      minute: '2-digit'
    }));

    myMess.answer = true;
    myMess.date = now;
    myMess.text = myText;

    this.props.onAddMessage(myMess);
    this.refs.input.value = ''
  };


  render() {
    return (
      <div id="qwe" className="ChatMessage-wrap">
        {this.props.data.map((item, index) => {
          return (
            <div className={'message-wrap ' + (item.answer && 'my-message')} key={index}>
              <img src={(item.answer ? myAvatar : this.props.dataImg.img)}
                   alt={item.name}
              />
              <div className="message-text">
                <p>{item.text}</p>
                <span>{item.date}</span>
              </div>
            </div>
          )
        })
        }

        <div className={'ChatMessage-form-wrap ' + (this.props.dataImg.img && 'active')}>
          <form onSubmit={this.addMessage}>
            <input className="ChatMessage-form-wrap-input" ref="input" type="text" autoFocus/>
            <input className="input-file" type="file" />
            <FontAwesome
              className='input-file-icon'
              name='paperclip'
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ChatMessage;