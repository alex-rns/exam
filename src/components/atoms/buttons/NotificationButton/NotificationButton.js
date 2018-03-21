import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NotificationButton.css'

const NotificationButton = () => {
  return(
    <button className='notification-button'>
      <FontAwesome
        name='bell'
      />
    </button>
  )
};


export default NotificationButton;