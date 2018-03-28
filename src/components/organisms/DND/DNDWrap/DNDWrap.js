import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component

import Quened from '../Quened/Quened'
import Planning from "../Planning/Planning";


class DNDWrap extends React.Component {

  render() {

    return (
      <div className="DNDWrap">

        <Grid fluid>
          <Row>
            <Quened data={this.props.data}/>
            <Planning/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DNDWrap;