import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Grid, Row} from 'react-bootstrap/lib';

//component

import Quened from '../Quened/Quened'
import Planning from "../Planning/Planning";
import Appa from "../Completed/App";
import Container from './Container';



class DNDWrap extends React.Component {


  render() {

    const style = {
      display: "flex",
      color: 'red',
      justifyContent: "space-around",
      paddingTop: "20px"
    }

    let quened = this.props.data.filter((e)=>{
      return e.status === "Quened"
    });
    let planning = this.props.data.filter((e)=>{
      return e.status === "Planning"
    });

    console.log('q',this.props)



    return (
      <div className="DNDWrap">

        <Grid fluid>
          <Row style={{...style}}>
            <Container id={1} list={quened} />
            <Container id={2} list={planning} />
            {/*<Container id={3} list={listThree} />*/}
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DNDWrap);