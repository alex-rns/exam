import uniqueId from 'lodash/uniqueId';
import sortBy from 'lodash/sortBy';
import React from 'react';
import {Col} from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';
import Sortable from 'react-sortablejs';


//components
import TaskDND from "../../../molecules/TaskDND/TaskDND";


class Quened extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{
        idd : 999,
        type: "New website",
        company: "Microsoft",
        price: "$1300",
        userImg: "/img/ava.png",
        id: "user1",
        deadline: "15 May 2018",
        timeLeft: "10 days left",
        timeSpent: "2 months",
        progress: 30,
        status: "Quened",
        assignedName: "Jolene Slater",
        assignedPosition: "Back End Dev"
      },
        {
          idd : 159,
          type: "New website",
          company: "Google",
          price: "$3600",
          userImg: "/img/DominicLynton.png",
          id: "user2",
          deadline: "31 May 2018",
          timeLeft: "Completed",
          timeSpent: "620 hours",
          progress: 100,
          status: "Completed",
          assignedName: "Dominic Lynton",
          assignedPosition: "Front End Dev"
        },
        {
          idd : 789,
          type: "New logo",
          company: "Themeforest",
          price: "$1200",
          userImg: "/img/LyanRoach.png",
          id: "user4",
          deadline: "13 April 2018",
          timeLeft: "Completed",
          timeSpent: "46 hours",
          progress: 100,
          status: "Completed",
          assignedName: "Lyan Roach",
          assignedPosition: "UX/UI Desinger"
        },
        {
          idd : 456,
          type: "New website",
          company: "Themeforest",
          price: "$1000",
          userImg: "/img/MichelleStewart.png",
          id: "user3",
          deadline: "14 April 2018",
          timeLeft: "Completed",
          timeSpent: "140 hours",
          progress: 100,
          status: "Completed",
          assignedName: "Michelle Stewart",
          assignedPosition: "Account"
        },
        {
          idd : 123,
          type: "Landing page",
          company: "Google",
          price: "$1500",
          userImg: "/img/ava.png",
          id: "user1",
          deadline: "31 May 2018",
          timeLeft: "15 days left",
          timeSpent: "40 hours",
          progress: 10,
          status: "Quened",
          assignedName: "Jolene Slater",
          assignedPosition: "Back End Dev"
        },]
    }
  }

  // componentWillMount() {
  //   const { items } = this.props;
  //   this.setState({ items })
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   const { items } = nextProps;
  //   this.setState({ items })
  // }


  // renderTodos() {
  //   return this.state.items.map((val, key) => {
  //     // the data-id attribute is necessary for each sortable item
  //     return <div key={val.idd} data-id={val.idd}>
  //
  //       <div className='Task'>
  //         <div className="task-wrap">
  //           <div className="task-tittle">
  //             <h4>{val.company}</h4>
  //             <span>
  //             {val.company}
  //                   </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   })
  // }


  render() {



    const items = this.state.items.map((val, key) => (
      <div key={uniqueId()} data-id={val.idd}>

        <div className='Task'>
          <div className="task-wrap">
            <div className="task-tittle">
              <h4>{val.company}</h4>
              <span>
              {val.company}
                    </span>
            </div>
          </div>
        </div>
      </div>)
    );


    return (

      <Sortable

        onChange={(items) => {
          this.setState({ items: items });
        }}

        options={{
          group: 'shared'
        }}
      >
        <h2> - {items.length}</h2>
        {items}

      </Sortable>
    )
  }
}

//     // let state = {
//     //   project: this.props.data
//     //
//     // };
//     // this.state.items = this.props.data.filter((e)=>{
//     //   return e.type === "New website"
//     // });
//
//     // const item = state.project.map(val => (
//     //   <li key={uniqueId()} data-id={val.company}>{val.company}</li>));
//     // console.log('333', state);
//
//
//
//     return (
//       <Col className='' md={2}>
//         <div className="workflow-header">
//           <h2>Quened{this.state.items.length}</h2>
//           <FontAwesome
//             className='workflow-header-icon'
//             name='angle-right'
//             size='3x'
//           />
//         </div>
//         <Sortable
//           options={{
//             group: 'shared'
//           }}
//
//           onChange={(order, sortable, evt) => {
//             this.setState({ items: order });
//           }}
//
//         >
//           {items}
//         </Sortable>
//       </Col>
//     )
//   }
// }



export default Quened;