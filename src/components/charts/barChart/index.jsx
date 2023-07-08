import { Bar } from "react-chartjs-2";
import './barChart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({labels, datas, datasetLabel, width='100%', height='100%', tooltipVal, title, subtitle, textBottom}) => {
    const chartData = {
      labels,
      datasets: [
        {
          borderRadius: 15,
          borderWidth: 1,
          hoverBorderColor: "rgb(0,0,0)",
          hoverBackgroundColor: "rgb(0,0,0)",
          label: datasetLabel,
          maxBarThickness: 30,
          backgroundColor: "rgba(249, 199, 11, 0.25)",
          data:datas,
        },
      ],
    };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          //   title: (value) => {
          //     return value + 'ta' ;
          //   },
          label: (value) => {
            return tooltipVal && value.formattedValue + tooltipVal;
          },
        },
      },
    },
  };
  return (
    <div className="chart-wrapper">
      {title ? <h1>{title}</h1> : null}
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      <div className="chart">
        <Bar height={width} width={height} options={options} data={chartData} />
      </div>
      {textBottom ? <p className="text-bottom">{textBottom}</p> : null}
    </div>
  );
};

export default BarChart;
