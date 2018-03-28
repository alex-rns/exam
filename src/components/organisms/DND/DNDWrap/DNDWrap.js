import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component

import Quened from '../Quened/Quened'
import Planning from "../Planning/Planning";


class DNDWrap extends React.Component {

  render() {

    // let it = this.props.data.filter((e)=>{
    //   return e.status === "Quened"
    // });
    // let itt = this.props.data.filter((e)=>{
    //   return e.status === "Planning"
    // });

    return (
      <div className="DNDWrap">

        <Grid fluid>
          <Row>
            <Quened data={this.props.data}/>
            <Planning data={this.props.data}/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DNDWrap;