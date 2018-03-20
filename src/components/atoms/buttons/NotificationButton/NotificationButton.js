import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NotificationButton.css'

const NotificationButton = () => {
  return(
    <button className='notification-button'>
      <FontAwesome
        name='bell'
        size='2x'
      />
    </button>
  )
};


export default NotificationButton;