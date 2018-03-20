import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NotificationButton.css'

class NotificationButton extends React.Component {
  render() {
    return (
        <button className='notification-button'>
          <FontAwesome
            className='icon-notification-button'
            name='bell'
            size='2x'
          />
        </button>
    )
  }
}

export default NotificationButton;