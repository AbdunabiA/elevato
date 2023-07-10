import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import Cards from "../../components/cards";
import ProductDistribution from "../../components/tables/productDistribution";

const Branch = () => {
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
            <ProductDistribution/>
          </>
        );
      })()}
      {/* </GetAll>  */}
    </div>
  );
};
export default Branch;
