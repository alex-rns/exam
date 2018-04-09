import React from 'react';

class ChatMessage extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      activeChat : []
    }
  }
  componentWillReceiveProps(nextProps) {
   this.setState({
     activeChat: nextProps.data
   });
  }

  addMessage = (e) =>{
    e.preventDefault();
    let myText = this.refs.input.value
    let myMess = {}
    myMess.text = myText;
    myMess.date = 'NOW';
    myMess.answer = 'true';
    console.log(myMess)

    this.setState({
      activeChat : [...this.state.activeChat, myMess]
    })


  }

  render() {
    console.log('chatMessage', this.props.data)
    console.log('chatMessage22', this.state.activeChat)


    return (
      <div>
        {this.state.activeChat.map((item, index) => {
          return (
            <div style={{backgroundColor:'#000', border: '1px red solid', margin: 5}} key={index}>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </div>
          )
        })
        }

        <div>
          <form onSubmit={this.addMessage}>
            <input ref="input" type="text"/>
            <button >123</button>
          </form>

        </div>
      </div>
    )
  }
}

export default ChatMessage;