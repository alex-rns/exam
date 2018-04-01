import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../DNDWrap/Container';

class Appa extends Component {

  render() {
    const style = {
      display: "flex",
      color: 'red',
      justifyContent: "space-around",
      paddingTop: "20px"
    }

    const listOne = [
      { id: 1, text: "Item 1",
        title: "Buy milk",
        label: "15 mins", },
      { id: 2, text: "Item 2",
        title: "Buy milk",
        label: "15 mins", },
      { id: 3, text: "Item 3",
        title: "Buy milk",
        label: "15 mins", }
    ];

    const listTwo = [
      { id: 4, text: "Item 4" },
      { id: 5, text: "Item 5" },
      { id: 6, text: "Item 6" }
    ];

    const listThree = [
      { id: 7, text: "Item 7" },
      { id: 8, text: "Item 8" },
      { id: 9, text: "Item 9" }
    ];

    return (
      <div style={{...style}}>
        <div>
          <Container id={1} list={listOne} />
        </div>
        <Container id={2} list={listTwo} />
        <Container id={3} list={listThree} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Appa);