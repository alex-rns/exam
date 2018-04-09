import React from 'react';

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
      <div>
        {this.props.data.map((item, index) => {
          return (
            <div style={{backgroundColor: '#000', border: '1px red solid', margin: 5}} key={index}>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </div>
          )
        })
        }

        <div>
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