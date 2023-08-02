import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import Cards from "../../components/cards";
import BranchesSales from "../../components/branchesSales";
import  BranchesSalesCirculation  from "components/charts/branchesSalesCirculation";
import Loader from "components/loader";

const Branches = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  // console.log(staticDate);
  return (
    <div className="container">
      <GetAll
        queryKey={["admin-branches"]}
        url={`/admin-warehouses/month/${
          month ? moment(month).format("YYYY-MM") : staticDate
        }/`}
      >
        {({items, isLoading}) => {
          if(isLoading) return <Loader/>
          const infos = [
            items?.total_income,
            items?.users,
            items?.days,
            items?.products_amount,
          ];
          console.log(items);
          return (
            <>
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <BranchesSales data={items.warehouses_diagram} />
              <BranchesSalesCirculation data={items.warehouses_diagram} />
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default Branches;
