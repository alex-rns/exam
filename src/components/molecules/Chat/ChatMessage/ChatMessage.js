import React from 'react';
import './ChatMessage.css'
import myAvatar from '../../../../assets/img/ava.png'

class ChatMessage extends React.Component {


  addMessage = (e) => {
    e.preventDefault();
    let myText = this.refs.input.value;
    let myMess = {};
    myMess.answer = true;
    myMess.date = 'NOW';
    myMess.text = myText;

    this.props.onAddMessage(myMess);
  };


  render() {

    return (
      <div className="ChatMessage-wrap">
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

        <div className={'ChatMessage-form-wrap' + this.props.data || 'active'}>
          <form onSubmit={this.addMessage}>
            <input ref="input" type="text"/>
            <button>123</button>
          </form>

        </div>
      </div>
    )
  }
}

export default ChatMessage;