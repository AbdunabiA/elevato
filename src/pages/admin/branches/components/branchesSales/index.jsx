import { PieChart } from "components/charts"
import './branchesSales.scss'

const BranchesSales = () => {
    const infos = {
        "Qo'qon":5000,
        "Farg'ona":12000,
        Andijon:9000,
        Namangan:10000,
    }
    const datas = {
      "Qo'qon": {
        id: 1,
      },
      "Farg'ona": {
        id: 2,
      },
      "Andijon": {
        id: 3,
      },
      "Namangan": {
        id: 4,
      },
    };
  return (
    <div className="branches-sales">
      <h1 className="title">Filiallar savdo ulushi</h1>
      <div className="branches-sales__info">
        <div className="branches-sales__info__left">
          <PieChart
            datas={datas}
            infos={infos}
            isLabelNavigatable
            url={"/branches"}
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