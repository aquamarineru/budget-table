import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function LineCart({ data }) {
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: data.title,
      align: 'left'
    },
    xAxis: {
      categories: data.categories,
      crosshair: true,
      labels: {
        align: 'right',
        style: {
          fontSize: '10px',
        }
      }
    },
    yAxis: {
      min: 700,
      max: 850,
      title: {
        enabled: false
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' ед.'
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
          format: '{point.y}',
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#333'
          }
        },
        marker: {
          enabled: true
        }
      }
    },
    series: data.series,
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] border-[1px] m-auto mt-4 p-2 border-border">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
