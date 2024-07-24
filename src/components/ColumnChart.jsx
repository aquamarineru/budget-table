import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = ({ data }) => {
  console.log(data )
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: data.title,
      align: 'left'
    },
    xAxis: {
      categories: data.categories,
      labels: {
        //enabled: true,
        style: {
          fontSize: '14px',
          fontWeight: 'bold'
        }
      },
      tickmarkPlacement: 'on',
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        enabled: false,
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + ' тыс';
        }
      }
    },
    tooltip: {
      valueSuffix: ' тыс.',
       headerFormat: ''
  
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        groupPadding: 0.1,
        dataLabels: {
          enabled: true,
          format: '{point.y:.2f}',
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
          }
        }
      }
    },
    series: [{
      
      data: data.series.map(series => series.data[0]), 
      colorByPoint: true, 
      showInLegend: false,
      colors: data.series.map(series => series.color)
    }]
  };
 
  return (
    <div className="w-full overflow-x-auto">
      <div className='w-full max-w-[1000px] mt-4 border-[1px] p-2 border-border'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default ColumnChart;
