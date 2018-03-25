import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';
import FontAwesome from 'react-fontawesome';
import './Task.css'

//components

import Block from '../../atoms/Block/Block'


const TaskDND = ({items}) => {
  items = items.map((val, key) => (

    <Block key={uniqueId()} data-id={val.title}>
      {val.title}
    </Block>
  ));

  return (
    <Sortable
      options={{
        group: 'shared'
      }}
    >
      {items}
    </Sortable>
  );
};

export default TaskDND;