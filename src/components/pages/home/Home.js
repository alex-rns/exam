import React from 'react';
import './Home.css'
import FontAwesome from 'react-fontawesome';

class Home extends React.Component {
  render(){
    return(
      <div>
        <h2>Home</h2>
        <FontAwesome
          className='nav-icon nav-icon-home'
          name='home'
          size="5x"
        />
      </div>


    )
  }
}

export default Home;