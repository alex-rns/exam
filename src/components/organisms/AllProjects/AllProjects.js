import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './AllProjects.css'
// import onlineIndicator from '../../../assets/img/online-indicator.png'
import FontAwesome from 'react-fontawesome';


class AllProjects extends React.Component {






  projectTitle = (cell, row) => {
    return (
      <div className="user-name-block" style={{display: 'flex', alignItems: 'center'}}>
        <div className="user-image">
          <img className="user-photo" src={row.userImg} alt={row.userName}/>
          {/*{*/}
            {/*row.active && (<img className="onlineIndicator" src={onlineIndicator} alt="onlineIndicator"/>)*/}
          {/*}*/}
        </div>

        <div className="user-main-info">
          <p>{row.type}</p>
          <span>{row.company}</span>
        </div>
      </div>
    )
  };


  lastActivityBlock = (cell, row) => {
    return (
      <div className="last-activity-block">
        <p className={row.active ? 'online-now' : ''}>
          <FontAwesome
            className='task-time-icon'
            name='clock'
          />
          {row.lastActivity}</p>
      </div>
    )
  };

  emailBlock = (cell, row) => {
    return (
      <div className="mail-and-phone-block">
        <p>
          {row.deadline}</p>
      </div>
    )
  };

  phoneBlock = (cell, row) => {
    return (
      <div className="mail-and-phone-block">
        <p>
          {row.phone}</p>
      </div>
    )
  };

  buttonBlock = () => {
    return (
      <button className="button-block">
        <FontAwesome
          className='dropdown-button-icon'
          name='ellipsis-v'
          size='2x'
        />
      </button>
    )
  };


  render() {


    return (
        <BootstrapTable
          className='project-table'
          bordered={ false }
          headerStyle={{background: '#2a2c3a', font: '400 1.2vmax Roboto', paddingLeft: 20}}
          containerStyle={{background: '#2a2c3a'}}
          data={this.props.data}
          pagination>

          <TableHeaderColumn
            tdStyle={{'border': 'none', background: '#3a3e52'}}
            thStyle={{'border': 'none'}}
            width='30%'
            dataField='id'
            isKey
            dataFormat={this.projectTitle}
          >Project title</TableHeaderColumn>

          <TableHeaderColumn
            tdStyle={{'border': 'none'}}
            thStyle={{'border': 'none'}}
            width='20%'
            dataField='lastActivity'
            dataFormat={this.lastActivityBlock}
          >Last activity</TableHeaderColumn>


          <TableHeaderColumn
            tdStyle={{'border': 'none'}}
            thStyle={{'border': 'none'}}
            width='20%'
            dataField='email'
            dataFormat={this.emailBlock}
          >Mail</TableHeaderColumn>


          <TableHeaderColumn
            tdStyle={{'border': 'none'}}
            thStyle={{'border': 'none'}}
            width='20%'
            dataField='phone'
            dataFormat={this.phoneBlock}
          >Phone</TableHeaderColumn>

          <TableHeaderColumn
            tdStyle={{'border': 'none'}}
            thStyle={{'border': 'none'}}
            width='10%'
            dataField='button'
            dataFormat={this.buttonBlock}
          >

          </TableHeaderColumn>

        </BootstrapTable>
    );

  }

}

export default AllProjects;