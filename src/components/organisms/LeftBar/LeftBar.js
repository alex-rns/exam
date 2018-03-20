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
                  name='list-ol'
                /></NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/statistics">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='chart-line'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact
                to="/calendar">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='calendar'
                /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeLeftLink"
                exact to="/users">
                <FontAwesome
                  className='nav-icon nav-icon-home'
                  name='user'
                /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftBar;