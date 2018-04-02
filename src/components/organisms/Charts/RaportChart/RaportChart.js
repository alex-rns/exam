import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Col} from 'react-bootstrap/lib';
import './RaportChart.css'

//component
import Select from '../../../atoms/Select/Select'

//config
import raportChart from "../../../../config/raportChart.config";
import TopPieChart from "./TopPieChart";

class RaportChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataRaport: [],
      showStatus: ''
    }
  }

  componentWillMount() {
    fetch('/api/user/raport', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          dataRaport: res.slice(0, 7)
        });
        let chart = this.refs.raportChart.getChart();
        chart.series[0].setData(this.state.dataRaport, true);
      })
  }

  onChange = (e) => {

    if (e.target.value === "Year") {
      this.setState({
        showStatus:e.target.value
      });
      fetch('/api/user/raport', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataRaport: res.slice(0, 365)
          });
          let chart = this.refs.raportChart.getChart();
          chart.series[0].setData(this.state.dataRaport, true);
          chart.xAxis[0].update({
            categories: []
          });
          chart.update({
            plotOptions: {
              series: {
                lineWidth: 1
              }
            }
          })
        })


    } else if (e.target.value === "Month") {
      this.setState({
        showStatus:e.target.value
      });
      fetch('/api/user/raport', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataRaport: res.slice(0, 31)
          });
          let chart = this.refs.raportChart.getChart();
          chart.series[0].setData(this.state.dataRaport, true);
          chart.xAxis[0].update({
            categories: []
          });
          chart.update({
            plotOptions: {
              series: {
                lineWidth: 2
              }
            }
          })
        })

    } else if (e.target.value === "Week") {
      this.setState({
        showStatus:e.target.value
      });
      fetch('/api/user/raport', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            dataRaport: res.slice(0, 7)
          });
          let chart = this.refs.raportChart.getChart();
          chart.series[0].setData(this.state.dataRaport, true);

        })

    }

  };

  render() {

    const raportSelect = {
      list: ["Week", "Month", "Year"],
      label: 'Show'
    };

    console.log(this.state.showStatus)

    return (
      <Col className="RaportChart">
        <div className="raport-header">
          <TopPieChart sort={this.state.showStatus}/>
          <Select onChange={this.onChange} data={raportSelect}/>
        </div>
        <ReactHighcharts config={raportChart} ref='raportChart'>
        </ReactHighcharts>
      </Col>
    )
  }
}

export default RaportChart;