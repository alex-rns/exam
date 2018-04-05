import React from 'react';
import FontAwesome from 'react-fontawesome';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './RaportTable.css'


const products = [
  {
    Campaing: 'Lorem ipsum dolor sit amet tetur',
    Time: '6 days',
    Views: 358000,
    Visitors: 58200,
    CTR: 25,
    CPC: 3.02,
    CPV: 2.51,
    CPM: 28.35,
    Status: 'Active'
  },
  {
    Campaing: 'Sed do eiusmod tempor',
    Time: '7 hours',
    Views: 1200,
    Visitors: 800,
    CTR: 10,
    CPC: 8.45,
    CPV: 6.13,
    CPM: 45.22,
    Status: 'Disable'
  }, {
    Campaing: 'Consectetur adipisicing elit sed',
    Time: '3 days',
    Views: 69000,
    Visitors: 7300,
    CTR: 19,
    CPC: 6.22,
    CPV: 3.90,
    CPM: 37.80,
    Status: 'Active'
  }
];

function getCaret(direction) {
  if (direction === 'asc') {
    return (
        <FontAwesome
          className='dropdown-caret dropdown-caret-table'
          name='angle-down'
        />
    );
  }
  if (direction === 'desc') {
    return (
        <FontAwesome
          className='dropdown-caret dropdown-caret-table'
          name='angle-up'
        />
    );
  }
  return (
    <FontAwesome
      className='dropdown-caret dropdown-caret-table'
      name='angle-down'
    />
  );
}

class RaportTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'Campaing',
      defaultSortOrder: 'ask'
    };

  }

  status = (cell, row) => {
    return <p className={'table-status ' + ((row.Status === 'Active')?'table-status-active': '')}>{row.Status}</p>
  };



  render() {
    return (
      <BootstrapTable
        headerStyle={{color: '#9ca1b2', 'background': '#3a3e52', 'font': '400 14px Montserrat'}}
        bordered={false}
        data={products}
        options={this.options}
      >

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          width='24%'
          tdStyle={{'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '16px Montserrat', 'padding': '20px 25px'}}
          thStyle={{'border': 'none', 'padding': '10px 25px'}}
          dataField='Campaing'
          isKey
          dataSort
        >Campaing</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Time'
          dataSort
        >Time</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Views'
          dataSort
        >Views</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Visitors'
          dataSort
        >Visitors</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CTR'
          dataSort
        >CTR</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPC'
          dataSort
        >CPC</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPV'
          dataSort
        >CPV</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='CPM'
          dataSort
        >CPM</TableHeaderColumn>

        <TableHeaderColumn
          sortHeaderColumnClassName='active-sorting'
          caretRender={getCaret}
          dataFormat={ this.status }
          tdStyle={{
            'background': '#2a2c3b',
            'borderColor': '#3a3e52',
            'font': '16px Montserrat',
            'padding': '20px 25px'
          }}
          thStyle={{
            'border': 'none',
            'padding': '20px 25px'
          }}
          dataField='Status'
          dataSort
        >Status</TableHeaderColumn>


      </BootstrapTable>
    );
  }
}

export default RaportTable;