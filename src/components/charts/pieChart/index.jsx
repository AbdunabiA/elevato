import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { generateUniqueColor } from "services/generateUniqueColors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  infos,
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
          // title: (value) => {
          //   console.log(value);
          //   return  'title';
          // },
        label: (data) => {
          const sum = data.dataset.data.reduce((acc, el)=>acc + Number(el), 0)
          const slice = data.parsed
          const percentage = 100 / sum * slice
          return tooltipVal
            ? `${data.formattedValue + tooltipVal} / ${percentage.toFixed(1)}%`
            : `${data.formattedValue} / ${percentage.toFixed(1)}%`;
        },
      },
    },
  },
};
  const data = {
    labels: Object.keys(infos),
    datasets: [
      {
        label: datasetLabel,
        data: Object.values(infos),
        backgroundColor: generateUniqueColor(Object.keys(infos)?.length),
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