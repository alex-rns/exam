import React from 'react';
import './FormSettings.css'


class LeftFormSettings extends React.Component{

  onSubmitForm = (e) => {
    e.preventDefault();
    this.refs.nameInput.value = ''
  };

  render(){
    return(
      <form onSubmit={this.onSubmitForm} className="LeftFormSettings">
        <label>Change name
          <input ref="nameInput" type="text"/>
        </label>
        <label>Change password
          <input type="password"/>
        </label>
        <label>Repeat new password
          <input type="password"/>
        </label>
        <button className='add-project-button' type="submit">Change</button>
      </form>
    )
  }
}


export default LeftFormSettings;