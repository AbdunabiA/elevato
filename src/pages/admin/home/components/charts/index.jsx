import { BarChart, PieChart } from "components/charts"
import './charts.scss'

const Charts = () => {
  return (
    <div className="charts-wrapper">
      <h1 className="title">Umumiy statistika</h1>
      <div className="charts">
      <BarChart
        title={"Daromad grafigi (uzs)"}
        subtitle={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        textBottom={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        labels={["Du", "Se", "Cho", "Pa", "Ju", "Sha", "Yak"]}
        datas={["5", "40", "1", "100", "10", "50", "110"]}
        datasetLabel={"Daromad"}
        tooltipVal={"M uzs"}
        key={1}
      />
      <BarChart
        title={"Mijozlar grafigi (dona)"}
        subtitle={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        textBottom={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        labels={["Du", "Se", "Cho", "Pa", "Ju", "Sha", "Yak"]}
        datas={["5000", "40000", "1000", "100000", "10000", "50000", "110000"]}
        datasetLabel={"Mijozlar"}
        tooltipVal={"ta"}
        key={2}
      />
      <PieChart
        title={"Mahsulot sotuv ulushi"}
        labels={["ofiyat1", "ofiyat2", "ofiyat3", "ofiyt4"]}
        datas={["5000", "40000", "10000", "100000"]}
        datasetLabel={"Mahsulot"}
        tooltipVal={"ta"}
        key={3}
      />
      <BarChart
        title={"Umumiy maosh grafigi (uzs)"}
        subtitle={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        textBottom={
          "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
        }
        labels={["Qo'qon", "Andijon", "Farg'ona", "To'rtko'l"]}
        datas={["100", "10", "50", "110"]}
        datasetLabel={"Maosh"}
        tooltipVal={"M uzs"}
        key={4}
      />
    </div>
    </div>
  );
}

export default Charts