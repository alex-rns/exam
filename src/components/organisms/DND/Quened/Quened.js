import uniqueId from 'lodash/uniqueId';
import React from 'react';
import {Col} from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';
import Sortable from 'react-sortablejs';

class Quened extends React.Component {

  state = {
    items: [{q: "app"}, {q: "2app"}, {q: "3app"}]
  };

  render() {

    const items = this.state.items.map(val=> (
      <li key={uniqueId()} data-id={val}>{val.q}</li>)
    );


    return (
      <Col className='' md={2}>
        <div className="workflow-header">
          <h2>Quened{this.state.items.length}</h2>
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
          tag="ul"

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