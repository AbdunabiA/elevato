import { BarChart, PieChart } from "components/charts";
import "./overallStatistics.scss";

const OverallStatistics = () => {
  const daromadGrafigi = {
    Du: 5,
    Se: 40,
    Cho: 8,
    Pa: 100,
    Ju: 10,
    Sha: 50,
    Yak: 110,
  };
  const mijozlarGrafigi = {
    Du: 5000,
    Se: 40000,
    Cho: 10500,
    Pa: 100000,
    Ju: 14000,
    Sha: 50000,
    Yak: 110000,
  };
  const mahsulotSotuvi = {
    ofiyat1: 5000,
    ofiyat2: 40000,
    ofiyat3: 10000,
    ofiyat4: 100000,
  };
  const mahsulot = {
    ofiyat1: {
      id: 1,
    },
    ofiyat2: {
      id: 2,
    },
    ofiyat3: {
      id: 3,
    },
    ofiyat4: {
      id: 4,
    },
  };
  const maoshGrafigi = {
    "Qo'qon": 100,
    Andijon: 10,
    "Farg'ona": 50,
    "To'rtko'l": 110,
  };
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
          infos={daromadGrafigi}
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
          infos={mijozlarGrafigi}
          tooltipVal={"ta"}
          key={2}
        />
        <PieChart
          title={"Mahsulot sotuv ulushi"}
          infos={mahsulotSotuvi}
          // datas={mahsulot}
          // isLabelNavigatable={true}
          // url={'/branches'}
          tooltipVal={"ta"}
          key={3}
        />
        <BarChart
          title={"Umumiy sotuv grafigi (uzs)"}
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          infos={maoshGrafigi}
          tooltipVal={"M uzs"}
          key={4}
        />
      </div>
    </div>
  );
};

export default OverallStatistics;
