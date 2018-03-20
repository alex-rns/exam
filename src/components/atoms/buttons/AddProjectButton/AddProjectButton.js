import React from 'react';
import FontAwesome from 'react-fontawesome';
import './AddProjectButton.css'

class AddProjectButton extends React.Component {
  render() {
    return (
        <button
          className='add-project-button'
        >
          <FontAwesome
            className='add-project-button-icon'
            name='plus'
          />
          Add Project
        </button>
    )
  }
}

export default AddProjectButton;