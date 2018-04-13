import React from 'react';
import './PageNotFound.css'
import {NavLink} from 'react-router-dom'

const PageNotFound = () => {
  return(
    <div className="PageNotFound">
      <h2>404</h2>
      <h2>PageNotFound</h2>
      <NavLink to="/">Home</NavLink>
    </div>

  )
};

export default PageNotFound;