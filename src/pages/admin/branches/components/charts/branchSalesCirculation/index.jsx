import { BarChart } from 'components/charts'
import { useTranslation } from 'react-i18next';


const BranchSalesCirculation = ({data}) => {
  const {t} = useTranslation()

  return (
    <div style={{ marginTop: "40px" }}>
      <h1 className="title">{data?.warehouse?.name} {t("savdo aylanmalari")}</h1>
      <div className="charts">
        <BarChart
          title={t("Savdo")}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={data?.sales_diagram}
          tooltipVal={"$"}
        />
        <BarChart
          title={`${t("Mahsulot grafigi")} (${t("dona")})`}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={data?.products_sales_diagram}
          tooltipVal={"ta"}
        />
      </div>
    </div>
  );
}

export default BranchSalesCirculation