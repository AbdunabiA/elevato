import Filters from "components/filters";
import { GetAll } from "modules";
import moment from "moment/moment";
import { useState } from "react";
import { getLastMonth } from "services/dates";
import Cards from "../../components/cards";
import OverallStatistics from "../../components/charts/overallStatistics";
import BranchesSalesCirculation from "components/charts/branchesSalesCirculation";
import Loader from "components/loader";

const Statistics = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);

  // console.log(
  //   moment(month).format("DD-MM-YYYY")
  // );
  // console.log(staticDate);
  return (
    <div className="container">
      <GetAll
        queryKey={["statistics-page"]}
        url={`/admin-statistics/month/${
          month ? moment(month).format("MM-YYYY") : staticDate
        }/`}
      >
        {({ items, isLoading }) => {
          if (isLoading) return <Loader />;
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
              <OverallStatistics data={items} />
              <BranchesSalesCirculation data={items.warehouses_diagram} />
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default Statistics;
