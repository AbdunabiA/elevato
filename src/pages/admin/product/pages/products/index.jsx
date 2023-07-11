import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import Cards from "../../components/cards";
import ProductsSales from "../../components/productsSales";
import ProductsDistribution from "../../components/tables/productsDistribution";

const Products = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  
  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  // console.log(staticDate);
  return (
    <div className="container">
      {/* <GetAll queryKey={[]}> */}
      {(() => {
        const infos = [80000000, 591, 8000, 73580];
        return (
          <>
            <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
            <Cards {...{ infos }} />
            <ProductsSales/>
            <ProductsDistribution/>
          </>
        );
      })()}
      {/* </GetAll>  */}
    </div>
  );
};

export default Products;
