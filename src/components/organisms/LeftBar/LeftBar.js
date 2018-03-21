import React from 'react';
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import './LeftBar.css'

//components

class LeftBar extends React.Component {

  render() {
    return (
      <div
        className={'LeftBar'}
      >

        <nav className="nav-bar">
          <ul>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='home'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/workflow">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='bars'
                /></NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/raport">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='chart-line'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/inbox">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='envelope'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact to="/users">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='users'
                /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftBar;