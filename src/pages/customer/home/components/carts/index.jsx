import { BarChart } from 'components/charts'
import './charts.scss'
import { Pie } from 'react-chartjs-2';

const Charts = () => {
    const chart1 = {
      ["19-7-2023"]: 42,
      ["10-7-2023"]: 44,
      ["21-7-2023"]: 46,
      ["22-7-2023"]: 48,
      ["23-7-2023"]: 50,
      ["24-7-2023"]: 52,
      ["25-7-2023"]: 55,
    };
    const chart2 = {
      ["19-7-2023"]: 420,
      ["10-7-2023"]: 440,
      ["21-7-2023"]: 460,
      ["22-7-2023"]: 480,
      ["23-7-2023"]: 500,
      ["24-7-2023"]: 520,
      ["25-7-2023"]: 550,
    };
  return (
    <div className="charts-wrapper">
      <div className="charts">
        <BarChart infos={chart1} />
        <BarChart infos={chart2} />
      </div>
    </div>
  );
}

export default Charts