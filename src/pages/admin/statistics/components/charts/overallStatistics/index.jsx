import { BarChart, PieChart } from "components/charts";
import "./overallStatistics.scss";

const OverallStatistics = ({data}) => {
 
  const mahsulot = data.products_diagram.products_diagram.reduce((prev, curr) => {
    return { ...prev, [curr.product]: curr.summa };
  }, {});
  
  const obunalar = data?.subscriptions_data.reduce((total, curr)=>{
    return {...total, [curr.name]:curr.summa}
  }, {})


  return (
    <div className="charts-wrapper">
      <h1 className="title">Umumiy statistika</h1>
      <div className="charts">
        <BarChart
          title={"Daromad grafigi ($)"}
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          infos={data.revenues_data}
          tooltipVal={"$"}
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
          infos={data.users_data}
          tooltipVal={"ta"}
          key={2}
        />
        <PieChart
          title={"Mahsulot sotuv ulushi"}
          infos={mahsulot}
          // datas={mahsulot}
          // isLabelNavigatable={true}
          // url={'/branches'}
          tooltipVal={"$"}
          key={3}
        />
        <BarChart
          title={"Obunalar grafigi ($)"}
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diamlectus laoreet."
          }
          infos={obunalar}
          tooltipVal={"$"}
          key={4}
        />
      </div>
    </div>
  );
};

export default OverallStatistics;
