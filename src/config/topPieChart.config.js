const TopPieChart = {

  chart: {
    type: 'pie',
    height: '130',
    width:'130',
    backgroundColor: '#2b2d3c'
  },


  title: {
    text: '',
    verticalAlign: 'middle',
    style: {
      fontFamily: 'Montserrat',
      color: '#2196f3',
      fontSize:'22',
      fontWeight: '600'
    }
  },

  plotOptions: {
    pie: {
      borderColor: null,
      colors: ['#4c4f5e', '#2196f3'],
    }
  },


  series: [{
    innerSize: '90%',
    dataLabels: {
      enabled: false
    }
  }],



  legend: {
    enabled: false
  },

  credits: {
    enabled: false
  }
};

export default TopPieChart;