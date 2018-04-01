import React, {Component} from 'react'
import {Board} from 'react-trello'

// const data = require('./data.json')


class Planning extends Component {

  constructor(props){
    super(props)
    this.state = {lanes: [
      {
        "id": "PLANNED",
        "title": "Planned Tasks",
        label: "200/70",
        "style": {
          "width": 280
        },
        "cards": [
          {
            "id": "Milk",
            "title": "Buy456 milk",
            "label": "15 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "2 Gallons of milk at the Deli store"
          },
          {
            "id": "Plan2",
            "title": "Dispose Garbage",
            "label": "10 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Sort out recyclable and waste as needed"
          },
          {
            "id": "Plan3",
            "title": "Write Blog",
            "label": "30 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Can AI make memes?"
          },
          {
            "id": "Plan4",
            "title": "Pay Rent",
            "label": "5 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Transfer to bank account"
          }
        ]
      },
      {
        "id": "WIP",
        "title": "Work In Progress",
        "label": "10/20",
        "style": {
          "width": 280
        },
        "cards": [
          {
            "id": "Wip1",
            "title": "Clean House",
            "label": "30 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
          }
        ]
      },
      {
        "id": "BLOCKED",
        "title": "Blocked",
        "label": "0/0",
        "style": {
          "width": 280
        },
        "cards": []
      },
      {
        "id": "COMPLETED",
        "title": "Completed",
        "style": {
          "width": 280
        },
        "label": "2/5",
        "cards": [
          {
            "id": "Completed1",
            "title": "Practice Meditation",
            "label": "15 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Use Headspace app"
          },
          {
            "id": "Completed2",
            "title": "Maintain Daily Journal",
            "label": "15 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Use Spreadsheet for now"
          }
        ]
      },
      {
        "id": "REPEAT",
        "title": "Repeat",
        "style": {
          "width": 280
        },
        "label": "1/1",
        "cards": [
          {
            "id": "Repeat1",
            "title": "Morning Jog",
            "label": "30 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Track using fitbit"
          }
        ]
      },
      {
        "id": "ARCHIVED",
        "title": "Archived",
        "style": {
          "width": 280
        },
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Completed 10km on cycle"
          }
        ]
      },
      {
        "id": "ARCHIVED2",
        "title": "Archived2",
        "style": {
          "width": 280
        },
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Completed 10km on cycle"
          }
        ]
      },
      {
        "id": "ARCHIVED3",
        "title": "Archived3",
        "style": {
          "width": 280
        },
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": {
              "width": 270,
              "maxWidth": 270,
              "margin": "auto",
              "marginBottom": 5
            },
            "description": "Completed 10km on cycle"
          }
        ]
      }
    ]}
  }



  // async componentWillMount() {
  //   const response = await this.getBoard()
  //   // this.setState({lanes: response})
  //
  // }
  //
  // getBoard() {
  //   return new Promise(resolve => {
  //     resolve(this.state)
  //
  //   })
  //
  // }




  shouldReceiveNewData = nextData => {


    console.log('New card has been added')
    console.log(nextData.lanes[0].cards.length)
    const newlabel = nextData.lanes[0].cards.length
    console.log('333', this.state.lanes[0].label)
    // qwere = this.state.boardData.lanes[0].label

    this.setState({
      lanes:{
        [0]:{
          label: nextData.lanes[0].cards.length
        }

      }

    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>React Trello Demo</h3>
        </div>
        <div className="App-intro">

          <Board
            data={this.state}
            draggable
            onDataChange={this.shouldReceiveNewData}
          />
        </div>
      </div>
    )
  }
}

export default Planning