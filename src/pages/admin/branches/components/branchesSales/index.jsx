import { PieChart } from "components/charts"
import './branchesSales.scss'
import { useTranslation } from "react-i18next"

const BranchesSales = ({data}) => {
  const {t} = useTranslation()
    
  const infos = Object.keys(data).reduce((prev, curr)=>{
    return {...prev, [curr]:data[curr].sales_amount}
  },{})
    
  return (
    <div className="branches-sales">
      <h1 className="title">{t("Filiallar savdo ulushi")}</h1>
      <div className="branches-sales__info">
        <div className="branches-sales__info__left">
          <PieChart
            infos={infos}
            isLabelNavigatable
            url={"/branch"}
            tooltipVal={"ta"}
          />
        </div>
        <div className="branches-sales__info__right">
          <p>
            Lorem ipsum dolor sit amet consectetur. Facilisis aenean nec laoreet
            nulla semper varius lectus nulla. Vitae metus vitae est non
            suspendisse purus. Etiam arcu non lorem id aliquam placerat morbi.
            Risus eget volutpat massa bibendum mauris sed. Nulla nam turpis
            purus sed sed fermentum mi. Elementum ut aenean pellentesque eget
            tortor in elit. Eleifend eros facilisi dictum at. Purus ligula
            auctor purus elit. Amet pharetra semper mauris arcu donec id
            molestie. Placerat ac tortor duis lectus consectetur lorem sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BranchesSales