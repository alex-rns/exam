import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './AllUsers.css'

//components

class AllProjects extends React.Component {


  avatar = (cell, row) => {
    return (
      <img className="all-users-ava" src={row.img} alt=""/>
    )
  };

  status = (cell, row) => {
    return <p className={'table-status ' + ((row.online === true) ? 'table-status-active' : '')}>
    </p>
  };


  render() {

    return (
      <BootstrapTable
        className='users-table'
        bordered={false}
        tableHeaderClass='usersTableHeaderClass'
        data={this.props.data}
        >

        <TableHeaderColumn
          width="10%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='name'
          isKey
        >Name</TableHeaderColumn>

        <TableHeaderColumn
          width="6%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataFormat={this.avatar}
        >Avatar</TableHeaderColumn>

        <TableHeaderColumn
          width="10%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='position'
        >Position</TableHeaderColumn>


        <TableHeaderColumn
          width="15%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='email'
        >Email</TableHeaderColumn>

        <TableHeaderColumn
          width="10%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='phone'
        >Phone</TableHeaderColumn>

        <TableHeaderColumn
          width="14%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='address'
        >Address</TableHeaderColumn>

        <TableHeaderColumn
          width="10%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataField='organization'
        >Organization</TableHeaderColumn>

        <TableHeaderColumn
          width="6%"
          columnClassName="userTableColumnClassName"
          tdStyle={{'border': 'none', background: '#3a3e52'}}
          thStyle={{'border': 'none'}}
          dataFormat={this.status}
        >Online</TableHeaderColumn>


      </BootstrapTable>
    );

  }

}

export default AllProjects;