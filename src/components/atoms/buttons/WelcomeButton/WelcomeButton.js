import React from 'react';
import FontAwesome from 'react-fontawesome';
import './WelcomeButton.css'

class WelcomeButton extends React.Component {
  render() {
    return (
      <div>
        <button
          className='welcome-button'
        >
          {this.props.data}

        </button>
        <FontAwesome
          className='welcome-button-icon'
          name='angle-right'
        />
      </div>
    )
  }
}

export default WelcomeButton;