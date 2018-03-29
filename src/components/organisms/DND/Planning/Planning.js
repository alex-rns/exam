import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';
import {Col} from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';


//components
import TaskDND from "../../../molecules/TaskDND/TaskDND";


class Planning extends React.Component {

  state = {
    items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
  };

  render() {

    const items = this.state.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));


    return (
      <Col className='' md={2}>
        <div className="workflow-header">
          <h2>To Do{this.state.items.length}</h2>
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
          onChange={(order, sortable, evt) => {
            this.setState({ items: order });
          }}

        >
          {items}
        </Sortable>
      </Col>
    )
  }
}

export default Planning;