import React from 'react';
import './IconMarker.css'

class IconMarker extends React.Component {

  constructor(){
    super();
    this.state = {
      marker:false
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        marker: true
      })
    }, 3000)
  }


  render(){
    return(
        <div className={this.state.marker && "IconMarker"}>
        </div>
    )
  }
}

export default IconMarker;