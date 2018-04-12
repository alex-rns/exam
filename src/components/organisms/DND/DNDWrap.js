import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Grid, Row} from 'react-bootstrap/lib';
import './DND.css'

//component
import Container from './DNDContainer';


class DNDWrap extends React.Component {


  render() {

    let quened = this.props.data.filter((e)=>{
      return e.status === "Quened"
    });
    let planning = this.props.data.filter((e)=>{
      return e.status === "Planning"
    });
    let design = this.props.data.filter((e)=>{
      return e.status === "Design"
    });
    let development = this.props.data.filter((e)=>{
      return e.status === "Development"
    });
    let testing = this.props.data.filter((e)=>{
      return e.status === "Testing"
    });
    let completed = this.props.data.filter((e)=>{
      return e.status === "Completed"
    });

    return (
      <div className="DNDWrap">

        <Grid fluid>
          <Row className="DND">
            <Container name="quened" id={1} list={quened} />
            <Container name="planning" id={2} list={planning} />
            <Container name="design" id={3} list={design} />
            <Container name="development" id={4} list={development} />
            <Container name="testing" id={5} list={testing} />
            <Container name="completed" id={6} list={completed} />
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DNDWrap);