import React from 'react';
import './Raport.css'


import RaportChart from "../../organisms/Charts/RaportChart/RaportChart";

class Raport extends React.Component {
  render() {
    return (
      <div className="Raport">
        <RaportChart/>

      </div>
    )
  }
}

export default Raport;