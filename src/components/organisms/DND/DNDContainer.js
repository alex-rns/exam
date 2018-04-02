import React, {Component} from 'react';
import update from 'react-addons-update';
import Card from './DNDCard';
import FontAwesome from 'react-fontawesome';
import {DropTarget} from 'react-dnd';
import './DND.css'

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {cards: props.list};
  }


  pushCard(card) {
    this.setState(update(this.state, {
      cards: {
        $push: [card]
      }
    }));
  }

  removeCard(index) {
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [index, 1]
        ]
      }
    }));
  }

  moveCard(dragIndex, hoverIndex) {
    const {cards} = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }


  render() {
    console.log('q', this.props)

    const {cards} = this.state;
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;

    const backgroundColor = isActive ? '#2f3242' : '#2b2d3c';


    //Total Price
    let priceSum = 0;
    cards.forEach(function (e) {
      priceSum += e.price;
      console.log('sum', priceSum)
    });


    console.log(priceSum);
    console.log(this.props);

    return connectDropTarget(
      <div>
        <div className="DND-header">
          <div>
            <p className="DND-header-name">{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
            </p>
            <p>{cards.length} project{(cards.length === 1) ? '' : 's'}  &middot;  <span>${priceSum} </span></p>

          </div>
          <FontAwesome
            name='angle-right'
            className="DND-header-icon"
          />

        </div>
        <div className="DND-container" style={{backgroundColor}}>

          {cards.map((card, i) => {
            return (
              <Card
                key={card.id}
                index={i}
                listId={this.props.id}
                card={card}
                removeCard={this.removeCard.bind(this)}
                moveCard={this.moveCard.bind(this)}/>
            );
          })}
        </div>
      </div>
    );
  }
}

const cardTarget = {
  drop(props, monitor, component) {
    const {id} = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
    return {
      listId: id
    };
  }
}

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Container);