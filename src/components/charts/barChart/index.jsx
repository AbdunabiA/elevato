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
import { Button } from "components/buttons";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  infos,
  displayDatasetLabel=false,
  positionDatasetLabel='bottom',
  datasetLabel,
  width = "100%",
  height = "130%",
  tooltipVal,
  title,
  subtitle,
  textBottom,
  onClick,
  hasButton,
}) => {
  const chartData = {
    labels:Object.keys(infos),
    datasets: [
      {
        borderRadius: 15,
        borderWidth: 1,
        hoverBorderColor: "rgb(0,0,0)",
        hoverBackgroundColor: "rgb(0,0,0)",
        label: datasetLabel,
        maxBarThickness: 30,
        backgroundColor: "rgba(249, 199, 11, 0.25)",
        data: Object.values(infos),
      },
    ],
  };

  const options = {
    responsive: true,
    onclick: () => {
      console.log("CLICKED");
    },
    plugins: {
      legend: {
        display: displayDatasetLabel,
        position: positionDatasetLabel,
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
      <div className="barchart-title">
        {title ? <h1>{title}</h1> : null}
        {hasButton?<Button text={"to'liq"} onClick={onClick}/>:null}
      </div>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      <div className="chart">
        <Bar height={width} width={height} options={options} data={chartData} />
      </div>
      {textBottom ? <p className="text-bottom">{textBottom}</p> : null}
    </div>
  );
};

export default BarChart;
