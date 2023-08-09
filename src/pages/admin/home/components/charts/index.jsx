import { BarChart, PieChart } from "components/charts"
import './charts.scss'
import { useTranslation } from "react-i18next"

const Charts = ({data}) => {
  const {t, i18n} = useTranslation()
  const mahsulot = Object.keys(data?.products_data).reduce((prev, curr)=>{
    return {...prev, [curr]:data?.products_data[curr].product_sale_summa}
  },{})

  const obunalar = data.subscriptions_data.reduce((acc, el)=>{
    return {...acc, [el.name]:el.summa}
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
}

export default Charts