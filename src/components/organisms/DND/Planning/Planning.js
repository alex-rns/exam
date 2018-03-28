import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';
import {Col} from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';


//components
import TaskDND from "../../../molecules/TaskDND/TaskDND";


class Planning extends React.Component {

  render() {

    let state = {
      project: this.props.data

    };

    const item = state.project.map(val => (
      <li key={uniqueId()} data-id={val}>{val.company}</li>));
    console.log('333', state);


    return (
      <Col className='' md={2}>
        <div className="workflow-header">
          <h2>To Do{item.length}</h2>
          <FontAwesome
            className='workflow-header-icon'
            name='angle-right'
            size='3x'
          />
        </div>
        <Sortable
          options={{
            group: 'shared'
          }}
          tag="ul" // Defaults to "div"

        >
          {item}
        </Sortable>
      </Col>
    )
  }
}

export default Planning;