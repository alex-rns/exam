const TopPieChart = {

  chart: {
    type: 'pie',
    height: '100',
    width:'100',
  },


  title: {
    text: '',
    verticalAlign: 'middle',
    style: {
      fontFamily: 'Montserrat',
      color: '#2196f3',
      fontSize:'16',
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