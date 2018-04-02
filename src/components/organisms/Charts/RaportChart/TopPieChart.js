import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {Row, Col} from 'react-bootstrap/lib';

//component

//config
import topPieChart from "../../../../config/topPieChart.config";


class TopPieChart extends React.Component {


  constructor(){
    super();
    this.state = {
      viewsCount : 0,
      viewsVisitors : 0,
      viewsImpressions : 0
    }
  }

  componentWillMount() {
    fetch('/api/user/raport/pie/week', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())

      .then(res => {
        this.setState({
          viewsCount : res[0].num
        });
        this.setState({
          viewsVisitors : res[1].num
        });
        this.setState({
          viewsImpressions : res[2].num
        });
        let chart = this.refs.topPieChart.getChart();
        chart.series[0].setData(res[0].data);
        chart.setTitle({
          text: res[0].percent + '%'
        });

        let chart2 = this.refs.topPieChart2.getChart();
        chart2.series[0].setData(res[1].data);
        chart2.setTitle({
          text: res[1].percent + '%'
        });

        let chart3 = this.refs.topPieChart3.getChart();
        chart3.series[0].setData(res[2].data);
        chart3.setTitle({
          text: res[2].percent + '%'
        });

      })

  }


  render() {


    return (
      <Col>

        <Row>
          <div>
            <ReactHighcharts config={topPieChart} ref='topPieChart'>
            </ReactHighcharts>
            <div>
              <p>{this.state.viewsCount}$</p>
              <span>Direct Sales</span>
            </div>
          </div>
          <div>
            <ReactHighcharts config={topPieChart} ref='topPieChart2'>
            </ReactHighcharts>
            <div>
              <p>980$</p>
              <span>Channel Sales</span>
            </div>
          </div>
          <div>
            <ReactHighcharts config={topPieChart} ref='topPieChart3'>
            </ReactHighcharts>
            <div>
              <p>1,250$</p>
              <span>Channel Sales</span>
            </div>
          </div>

        </Row>

      </Col>
    )
  }

}

export default TopPieChart;