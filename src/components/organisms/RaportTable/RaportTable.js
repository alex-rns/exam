import React from 'react';
import FontAwesome from 'react-fontawesome';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './RaportTable.css'


class RaportTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'Campaing',
      defaultSortOrder: 'ask'
    };

    this.state = {
      table: []
    };

    fetch("/api/user/raport/table", {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          table: res
        });

      })
  }

  getCaret = (direction) => {
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
  };

  status = (cell, row) => {
    return <p className={'table-status ' + ((row.Status === 'Active') ? 'table-status-active' : '')}>{row.Status}</p>
  };

  cellStyle = {
    tdStyle: {
      'borderColor': '#3a3e52'
    },
    thStyle: {
      'border': 'none',
    }
  };

  render() {
    return (
      <BootstrapTable
        tableHeaderClass='tableHeaderClass'
        bordered={false}
        data={this.state.table}
        options={this.options}
      >
        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          width='24%'
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='Campaing'
          isKey
          dataSort
        >Campaing</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='Time'
          dataSort
        >Time</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='Views'
          dataSort
        >Views</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='Visitors'
          dataSort
        >Visitors</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='CTR'
          dataSort
        >CTR</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='CPC'
          dataSort
        >CPC</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='CPV'
          dataSort
        >CPV</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='CPM'
          dataSort
        >CPM</TableHeaderColumn>

        <TableHeaderColumn
          columnClassName="tableColumnClassName"
          sortHeaderColumnClassName='active-sorting'
          caretRender={this.getCaret}
          dataFormat={this.status}
          tdStyle={this.cellStyle.tdStyle}
          thStyle={this.cellStyle.thStyle}
          dataField='Status'
          dataSort
        >Status</TableHeaderColumn>

      </BootstrapTable>
    );
  }
}

export default RaportTable;