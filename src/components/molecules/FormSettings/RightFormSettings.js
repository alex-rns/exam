import React from 'react';
import './FormSettings.css'

class RightFormSettings extends React.Component{
  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render(){
    return(
      <form onSubmit={this.onSubmitForm} className="RightFormSettings">
        <label>Change anywhere
          <input type="radio"/>
          <input type="radio"/>
        </label>
        <label>Change color
          <input type="color"/>
        </label>
        <label>Set your data
          <input type="range"/>
        </label>
        <button className='add-project-button' type="submit">Change</button>
      </form>
    )
  }
}


export default RightFormSettings;