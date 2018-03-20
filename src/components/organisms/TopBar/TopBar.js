import React from 'react';
import {withRouter} from 'react-router-dom';
import './TopBar.css';

//components
import AccountDropdown from '../../atoms/AccountDropdown/AccountDropdown'
import userPhoto from '../../../assets/img/user-photo.png'
import NotificationButton from "../../atoms/buttons/NotificationButton/NotificationButton";
import AddProjectButton from "../../atoms/buttons/AddProjectButton/AddProjectButton";
import SearchButton from "../../atoms/buttons/SearchButton/SearchButton";
import Logo from '../../../assets/img/logo.png';



const userData = {
  name: localStorage.getItem("userName"),
  userPhoto: userPhoto
};


class TopBar extends React.Component {

  render() {
    return (
      <div className='TopBar'>
        <div className="top-bar-left-side">
          <img className='logo' src={Logo} alt="Logo"/>
        </div>

        <div className="user-panel">
          <AddProjectButton/>
          <SearchButton/>
          <NotificationButton/>
          <AccountDropdown data={userData} />
        </div>
      </div>
    )
  }
}

export default withRouter(TopBar);