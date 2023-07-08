import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { generateUniqueColor } from "services/generateUniqueColors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  labels,
  datas,
  datasetLabel,
  width = "100%",
  height = "100%",
  tooltipVal,
  title, 
  subtitle,
  textBottom,
}) => {
const options = {
  responsive: true,
  plugins: {
    legend: {
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
  const data = {
    labels: labels,
    datasets: [
      {
        label: datasetLabel,
        data: datas,
        backgroundColor: generateUniqueColor(labels?.length),
        borderWidth: 1,
        hoverBorderColor: "rgb(0,0,0)",
      },
    ],
  };
  return (
    <div className="chart-wrapper">
      {title ? <h1>{title}</h1> : null}
      {subtitle ? <p className="subtitle">{subtitle}</p>:null}
      <div className="chart">
        <Pie width={width} height={height} data={data} options={options} />
      </div>
      {textBottom ? <p className="text-bottom">{textBottom}</p> : null}
    </div>
  );
};

export default PieChart