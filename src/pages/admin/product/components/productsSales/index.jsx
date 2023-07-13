import { PieChart } from "components/charts";
import "./productsSales.scss";

const ProductsSales = () => {
  const infos = {
    Ofiyat1: 5000,
    Ofiyat2: 12000,
    Ofiyat3: 9000,
    Ofiyat4: 10000,
  };
  const datas = {
    Ofiyat1: {
      id: 1,
    },
    Ofiyat2: {
      id: 2,
    },
    Ofiyat3: {
      id: 3,
    },
    Ofiyat4: {
      id: 4,
    },
  };
  return (
    <div className="products-sales">
      <h1 className="title">Mahsulotlar savdo ulushi</h1>
      <div className="branches-sales__info">
        <div className="branches-sales__info__left">
          <PieChart
            datas={datas}
            infos={infos}
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
};

export default ProductsSales;