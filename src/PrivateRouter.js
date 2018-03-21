import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom'

//components
import TopBar from './components/organisms/TopBar/TopBar'
import LeftBar from "./components/organisms/LeftBar/LeftBar";

const PrivateRouter = ({component: Component, ...rest}) => {

  return (
    <Route {...rest} render={matchProps => {

      if (localStorage.getItem('userCheck') === 'user exist') {
        return (
          <div className='Private'>
            <TopBar/>
            <LeftBar/>
            <Link to="/">Home</Link>
            <Link to="/workflow">workflow</Link>
            <Link to="/raport">raport</Link>
            <Link to="/projects">projects</Link>
            <Link to="/inbox">inbox</Link>

            <div className='content'>
              <Component {...matchProps}/>
            </div>
          </div>
        )
      } else {
        alert("Wrong password or username ");
        return (
          <Redirect to="/authentication"/>
        )
      }
    }}/>
  )
};

export default PrivateRouter;