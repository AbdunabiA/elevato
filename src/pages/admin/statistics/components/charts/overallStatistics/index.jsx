import { BarChart, PieChart } from "components/charts";
import "./overallStatistics.scss";
import { useTranslation } from "react-i18next";

const OverallStatistics = ({data}) => {
  const {t} = useTranslation()
  const mahsulot = data.products_diagram.products_diagram.reduce((prev, curr) => {
    return { ...prev, [curr.product]: curr.summa };
  }, {});
  
  const obunalar = data?.subscriptions_data.reduce((total, curr)=>{
    return {...total, [curr.name]:curr.summa}
  }, {})


  return (
    <div className="charts-wrapper">
      <h1 className="title">{t("Umumiy statistika")}</h1>
      <div className="charts">
        <BarChart
          title={`${t("Daromad grafigi")} ($)`}
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
          title={`${t("Mijozlar grafigi")} (${t("dona")})`}
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
          title={t("Mahsulot sotuv ulushi")}
          infos={mahsulot}
          // datas={mahsulot}
          // isLabelNavigatable={true}
          // url={'/branches'}
          tooltipVal={"$"}
          key={3}
        />
        <BarChart
          title={`${t("Obunalar grafigi")} ($)`}
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
