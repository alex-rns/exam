import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component

import Quened from '../Quened/Quened'
import Planning from "../Planning/Planning";




class DNDWrap extends React.Component {

  render() {

    let quened = this.props.data.filter((e)=>{
      return e.status === "Quened"
    });
    let planning = this.props.data.filter((e)=>{
      return e.status === "Planning"
    });

    return (
      <div className="DNDWrap">

        <Grid fluid>
          <Row>
            <Quened items={quened}/>
            <Quened items={planning}/>
            {/*<Planning/>*/}
            {/*<Planning data={quened}/>*/}
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DNDWrap;